import {ActionsTypes} from "./store";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>
export type PostType = {
    id: number,
    message: string,
    likesCount: number,
    avatar: string
}
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'


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
    newPostText: ''
}
export type InitialStateType = typeof initialState


export const profileReducer = (state:InitialStateType = initialState , action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 1,
                avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
            }
             return {
                ...state,
                posts : [...state.posts, newPost],
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText : action.newText
            };
        default:
            return state
    }

}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextActionCreator= (newText:string) => {
    return {
        type:UPDATE_NEW_POST_TEXT,
        newText:newText
    } as const
}
