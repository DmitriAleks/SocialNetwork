import {ThunkDispatch} from "redux-thunk";
import {usersAPI} from "../api/api";
import {AppActionsType} from "./redux-store";

export type UsersActionsType =
   | followType
    | unfollowTypeAT
    | setUsersTypeAT
    | setCurrentPageAT
    | setTotalUserCountAT
    | setToggleIsFetchingAT
    | setToggleFollowingProgressAT;
export type followType = ReturnType<typeof followSuccess>;
export type unfollowTypeAT = ReturnType<typeof unfollowSuccess>;
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
        large: string,
    },
    status: null,
    followed: boolean,
}


export type followingInProgressType = {
    id: number
}

let initialStateUsers: InitialStateUsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
export type InitialStateUsersType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}


export const usersReducer = (state: InitialStateUsersType = initialStateUsers, action: AppActionsType): InitialStateUsersType => {
    switch (action.type) {
        case 'USERS/FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'USERS/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'USERS/SET-USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'USERS/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'USERS/SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'USERS/TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFollow
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress].filter(id => id != action.userId)
            }
        default:
            return state
    }

}
export const followSuccess = (userId: number) => {
    return {
        type: 'USERS/FOLLOW',
        userId: userId
    } as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: 'USERS/UNFOLLOW',
        userId: userId
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'USERS/SET-USERS',
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'USERS/SET_CURRENT_PAGE',
        currentPage: currentPage
    } as const
}
export const setTotalUserCount = (totalCount: number) => {
    return {
        type: 'USERS/SET-TOTAL-USERS-COUNT',
        totalCount: totalCount
    } as const
}
export const setToggleIsFetching = (getFetching: boolean) => {
    return {
        type: 'USERS/TOGGLE-IS-FETCHING',
        isFetching: getFetching
    } as const
}
export const setToggleFollowingProgress = (isFollow: boolean, userId: number) => {
    return {
        type: 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFollow: isFollow,
        userId: userId
    } as const
}
//THUNK
export const getUsersThunkCreator = (page: number, pageSize: number) => {
    return async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
        dispatch(setToggleIsFetching(true));
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(setToggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUserCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch : ThunkDispatch<{}, {}, AppActionsType>,userId: number, apiMethod:  any , actionCreator :  any ) => {
    dispatch(setToggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setToggleFollowingProgress(false, userId))

}

export const follow = (userId: number) => {
    return async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
        followUnfollowFlow(dispatch,userId,usersAPI.followUsers.bind(usersAPI),followSuccess)
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
        followUnfollowFlow(dispatch,userId,usersAPI.unfollowUsers.bind(usersAPI),unfollowSuccess)
    }
}
