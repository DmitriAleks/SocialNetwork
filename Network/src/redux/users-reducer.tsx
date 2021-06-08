export type UsersFollowType = followType|unfollowType|setUsersType|setCurrentPageAC
export type followType = ReturnType<typeof followAC>
export type unfollowType = ReturnType<typeof unfollowAC>
export type setUsersType = ReturnType<typeof setUsersAC>
export type setCurrentPageAC = ReturnType<typeof setCurrentPageAC>



export type UsersType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: {
        small: null,
        large: null
    },
    status: null,
    followed: boolean


    // id: number,
    // name: string,
    // followed: boolean,
    // status:string,
    // location: {
    //   city:string,
    //   country: string,
    // },
    // photos: {
    //     "small": string,
    //     "large": string
    // },
}
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"


let initialStateUsers:InitialStateUsersType = {
    users: [ ],
    pageSize:5,
    totalUsersCount:51,
    currentPage: 2

}
export type InitialStateUsersType = {
    users:Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


export const usersReducer = (state:InitialStateUsersType = initialStateUsers , action: UsersFollowType):InitialStateUsersType => {
    debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users:[...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state
    }

}
export const followAC = (userId:number) => {
    return {
        type: FOLLOW,
        userId:userId
    } as const
}
export const unfollowAC= (userId:number ) => {
    return {
        type:UNFOLLOW,
        userId:userId
    } as const
}
export const setUsersAC= (users:Array<UsersType> ) => {
    return {
        type:SET_USERS,
        users:users
    } as const
}
export const setCurrentPageAC= (currentPage: number ) => {
    return {
        type:SET_CURRENT_PAGE,
        currentPage:currentPage
    } as const
}
