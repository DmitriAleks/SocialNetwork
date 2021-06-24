import {authAPI} from "../api/api";

export type UsersFollowType = setUserDataType
export type setUserDataType = ReturnType<typeof setAuthUserData>


const SET_USER_DATA = 'SET_USER_DATA'
const UNFOLLOW = 'UNFOLLOW'

let initialStateUser: InitialStateUserType = {
} as InitialStateUserType
export type InitialStateUserType = {
    id: number | null,
    email: string ,
    login: string ,
    isAuth: boolean
}


export const authReducer = (state: InitialStateUserType = initialStateUser, action: UsersFollowType): InitialStateUserType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}
export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    } as const
}
// export const unfollow = (userId: number) => {
//     return {
//         type: UNFOLLOW,
//         userId: userId
//     } as const
// }
export const getAuthUserData=()=>(dispatch:any)=>{
    authAPI.me().then(response => {
        if(response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login));
        }
    });
}


