import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppActionsType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type UsersFollowType = setUserDataType
export type setUserDataType = ReturnType<typeof setAuthUserData>


const SET_USER_DATA = 'SET_USER_DATA'

let initialStateUser: InitialStateUserType = {} as InitialStateUserType
export type InitialStateUserType = {
    id: number | null,
    email: string| null,
    login: string| null,
    isAuth: boolean
}


export const authReducer = (state: InitialStateUserType = initialStateUser, action: UsersFollowType): InitialStateUserType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }

}
export const setAuthUserData = (id: number| null, email: string| null, login: string| null, isAuth:boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login,isAuth}
    } as const
}
export const getAuthUserData = () => (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login,true));
        }
    });
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0]: 'Some error';
            let action:any = stopSubmit('login',{_error:message});     //any
            dispatch(action)
        }
    });
}
export const logout = () => (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null,false));
        }
    });
}

