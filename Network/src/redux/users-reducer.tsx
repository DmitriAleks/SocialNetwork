export type UsersFollowType = followType | unfollowTypeAT | setUsersTypeAT | setCurrentPageAT | setTotalUserCountAT|setToggleIsFetchingAT|setToggleFollowingProgressAT;
export type followType = ReturnType<typeof follow>;
export type unfollowTypeAT = ReturnType<typeof unfollow>;
export type setUsersTypeAT = ReturnType<typeof setUsers>;
export type setCurrentPageAT = ReturnType<typeof setCurrentPage>;
export type setTotalUserCountAT = ReturnType<typeof setTotalUserCount>;
export type setToggleIsFetchingAT = ReturnType<typeof setToggleIsFetching>;
export type setToggleFollowingProgressAT = ReturnType<typeof setToggleFollowingProgress>;




export type UsersType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: {
        small: string,
        large: string
    },
    status: null,
    followed: boolean


}
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialStateUsers: InitialStateUsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching:false,
    followingInProgress: false

}
export type InitialStateUsersType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}


export const usersReducer = (state: InitialStateUsersType = initialStateUsers, action: UsersFollowType): InitialStateUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
            }
        default:
            return state
    }

}
export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const
}
export const setTotalUserCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    } as const
}
export const setToggleIsFetching = (getFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: getFetching
    } as const
}
export const setToggleFollowingProgress = (getFetching: boolean) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching: getFetching
    } as const
}

