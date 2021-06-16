export type UsersFollowType = setUserDataType | unfollowTypeAT
export type setUserDataType = ReturnType<typeof setAuthUserData>
export type unfollowTypeAT = ReturnType<typeof unfollow>


const SET_USER_DATA = 'SET_USER_DATA'
const UNFOLLOW = 'UNFOLLOW'

let initialStateUser: InitialStateUsersType = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}
export type InitialStateUsersType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}


export const authReducer = (state: InitialStateUsersType = initialStateUser, action: UsersFollowType): InitialStateUsersType => {
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
export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}


