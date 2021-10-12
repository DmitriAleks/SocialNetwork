import {ThunkDispatch} from "redux-thunk";
import {AppActionsType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


export type AllAppActionsType = setUserDataType
export type setUserDataType = ReturnType<typeof initializedSuccess>


let initialStateUser: InitialStateUserType = {} as InitialStateUserType
export type InitialStateUserType = {
    initialized: boolean,
}


export const appReducer = (state: InitialStateUserType = initialStateUser, action: AllAppActionsType): InitialStateUserType => {
    switch (action.type) {
        case 'APP/INITIALIZED_SUCCESS':
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
        type: 'APP/INITIALIZED_SUCCESS',
    } as const
}
export const initializedApp = () => (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
                dispatch(initializedSuccess());
            }
        )
}

