import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppActionsType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type UsersFollowType = setUserDataType
export type setUserDataType = ReturnType<typeof initializedSuccess>


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialStateUser: InitialStateUserType = {} as InitialStateUserType
export type InitialStateUserType = {
    initialized: boolean,
}


export const appReducer = (state: InitialStateUserType = initialStateUser, action: UsersFollowType): InitialStateUserType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}
export const initializedSuccess = () => {
    return {
        type:INITIALIZED_SUCCESS,
    } as const
}
export const initialized = () => (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {

}

