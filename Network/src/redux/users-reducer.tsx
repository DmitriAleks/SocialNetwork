import {ThunkDispatch} from "redux-thunk";
import {usersAPI} from "../api/api";
import {AppActionsType} from "./redux-store";

export type UsersActionsType =
    followType
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
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

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
    console.log(action)
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
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
        type: FOLLOW,
        userId: userId
    } as const
}
export const unfollowSuccess = (userId: number) => {
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
export const setToggleFollowingProgress = (isFollow: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFollow: isFollow,
        userId: userId
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
        dispatch(setToggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setToggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        });
    }
}
export const follow = (userId: number) => {
    return (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
        dispatch(setToggleFollowingProgress(false, userId))
        usersAPI.followUsers(userId)
            .then(response => {
                console.log(response.data.resultCode)
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
            })
            .finally(() => dispatch(setToggleFollowingProgress(false, userId)))
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
        dispatch(setToggleFollowingProgress(true, userId))
        usersAPI.unfollowUsers(userId)
            .then(response => {
                console.log(response.data)
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
            })
            .finally(() => dispatch(setToggleFollowingProgress(false, userId)))
    }
}
