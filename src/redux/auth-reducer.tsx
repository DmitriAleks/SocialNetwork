import {authAPI, securityAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppActionsType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type UsersFollowType = setUserDataType
    | ReturnType<typeof getCaptchaUrlSuccess>
export type setUserDataType = ReturnType<typeof setAuthUserData>


let initialStateUser: InitialStateUserType = {} as InitialStateUserType
export type InitialStateUserType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string
}


export const authReducer = (state: InitialStateUserType = initialStateUser, action: UsersFollowType): InitialStateUserType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
        case 'AUTH/GET-CAPTCHA-URL-SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'AUTH/SET_USER_DATA',
        payload: {id, email, login, isAuth}
    } as const
}
export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    debugger
    return {
        type: 'AUTH/GET-CAPTCHA-URL-SUCCESS',
        payload: {captchaUrl}
    } as const
}
export const getAuthUserData = () => async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha?: string) => async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    const response = await authAPI.login(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURLTC())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        let action: any = stopSubmit('login', {_error: message});     //any
        dispatch(action)
    }
}
export const logout = () => async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}
export const getCaptchaURLTC = () => async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

