import {profileAPI, usersAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppActionsType, AppStateType} from "./redux-store";
import {ProfileDataFormType} from "../Components/Profile/ProfileInfo/ProfileDataForm";
import {stopSubmit} from "redux-form";

export type ActionsTypes =
    | AddPostActionType
    | setUserProfileType
    | setStatusProfileType
    | updatePhotoProfile
    | ReturnType<typeof deletePost>

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusProfileType = ReturnType<typeof setStatusProfileActionCreator>
export type updatePhotoProfile = ReturnType<typeof updatePhoto>
export type PostType = {
    id: number,
    message: string,
    likesCount: number,
    avatar: string
}
export type ProfileContactUserType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null

}
export type ProfileUserType = {
    aboutMe: string,
    contacts: ProfileContactUserType,
    lookingForAJob: true,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string | null
        large: string | null
    }

}

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi,how are you?',
            likesCount: 12,
            avatar: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        },
        {
            id: 2,
            message: "It's my first post",
            likesCount: 8,
            avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
        },
        {
            id: 3,
            message: "It's my first post",
            likesCount: 8,
            avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
        },
        {
            id: 4,
            message: "It's my first post",
            likesCount: 8,
            avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
        },
    ] as Array<PostType>,
    newPostText: '',
    profile: {} as ProfileUserType,
    status: ''
}
export type InitialStateType = typeof initialState


export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'PROFILE/ADD-POST':
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPost,
                likesCount: 1,
                avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case 'PROFILE/SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'PROFILE/SET-STATUS-PROFILE':
            return {
                ...state,
                status: action.status
            };
        case 'PROFILE/DELETE-POST':
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        case 'PROFILE/UPDATE-PHOTO':
            return {
                ...state, profile: {...state.profile, photos: action.photo}
            }
        default:
            return state
    }

}
export const addPostActionCreator = (newPost: string) => {
    return {
        type: 'PROFILE/ADD-POST',
        newPost
    } as const
}
export const setStatusProfileActionCreator = (status: string) => {
    return {
        type: 'PROFILE/SET-STATUS-PROFILE',
        status,
    } as const
}
export const setUserProfile = (profile: ProfileUserType) => {
    return {
        type: 'PROFILE/SET-USER-PROFILE',
        profile: profile
    } as const
}
export const deletePost = (postId: number) => {
    return {
        type: 'PROFILE/DELETE-POST',
        postId
    } as const
}
export const updatePhoto = (photo: any) => {
    return {
        type: 'PROFILE/UPDATE-PHOTO',
        photo
    } as const
}
export const getUserProfile = (userId: string) => async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatusProfile = (userId: string) => async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusProfileActionCreator(response.data));
}
export const updateStatusProfile = (status: string) => async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusProfileActionCreator(response.data));
    }
}
export const updatePhotoProfile = (file: string) => async (dispatch: ThunkDispatch<{}, {}, AppActionsType>) => {
    let response = await profileAPI.updatePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(updatePhoto(response.data.data.photos));
    }
}
export const saveProfileTC = (profile: ProfileDataFormType) => async (dispatch: ThunkDispatch<{}, {}, AppActionsType>,getState:any) => {
   const id = getState().auth.id
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(id))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        let action: any = stopSubmit('edit-profile', {_error: message});     //any
        dispatch(action)
        // return Promise.reject(response.data.messages[0])
    }
}