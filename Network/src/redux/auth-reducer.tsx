export type UsersFollowType = setUserDataType | unfollowTypeAT
export type setUserDataType = ReturnType<typeof setUserData>
export type unfollowTypeAT = ReturnType<typeof unfollow>


const SET_USER_DATA  = 'SET_USER_DATA'
const UNFOLLOW = 'UNFOLLOW'

let initialStateUser: InitialStateUsersType = {
    userId:  null,
    email: null,
    login: null

}
export type InitialStateUsersType = {
    userId:  number|null,
    email: string|null,
    login: string|null,
}


export const authReducer = (state: InitialStateUsersType = initialStateUser, action: UsersFollowType): InitialStateUsersType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
...action.data
            }
        default:
            return state
    }

}
export const setUserData = (userId: number, email:string, login:string) => {
    return {
        type: SET_USER_DATA,
        data: {userId,email,login}
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}

