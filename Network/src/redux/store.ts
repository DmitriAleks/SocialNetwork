
import {AddPostActionType, profileReducer, UpdateNewPostTextType} from "./profile-reducer";
import {dialogsReducer, SendMessageType, UpdateNewMessageBodyType} from "./dialogs-reducer";

 type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number,
    avatar: string
}
 type DialogType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
    newMessageBody:string
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogPage: DialogPageType
}
export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: () => void
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: AddPostActionType | UpdateNewPostTextType| SendMessageType | UpdateNewMessageBodyType) => void
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextType | SendMessageType| UpdateNewMessageBodyType
// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {
//                     id: 1,
//                     message: 'Hi,how are you?',
//                     likesCount: 12,
//                     avatar: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
//                 },
//                 {
//                     id: 2,
//                     message: "It's my first post",
//                     likesCount: 8,
//                     avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
//                 },
//                 {
//                     id: 3,
//                     message: "It's my first post",
//                     likesCount: 8,
//                     avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
//                 },
//                 {
//                     id: 4,
//                     message: "It's my first post",
//                     likesCount: 8,
//                     avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
//                 },
//             ],
//             newPostText: ''
//         },
//         dialogPage: {
//             dialogs: [
//                 {id: 1, name: "Dmitri"},
//                 {id: 2, name: "Viktoria"},
//                 {id: 3, name: "Igor"},
//                 {id: 4, name: "Viktor"},
//                 {id: 5, name: "Andrey"},
//                 {id: 6, name: "Tanyaaa"}
//             ],
//             messages: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "How is your it-kamasutra"},
//                 {id: 3, message: "Yo"},
//                 {id: 4, message: "Yo"},
//                 {id: 5, message: "Yo"},
//             ],
//             newMessageBody: ''
//         }
//     },
//     _callSubscriber() {
//         console.log('state is not')
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     getState() {
//         return this._state;
//     },
//
//     addPost() {
//         let newPost: PostType = {
//             id: new Date().getTime(),
//             message: this._state.profilePage.newPostText,
//             likesCount: 0,
//             avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
//         }
//         this._state.profilePage.posts.push(newPost)
//         this._callSubscriber()
//     },
//     updateNewPostText(newText: string) {
//         this._state.profilePage.newPostText = newText
//         this._callSubscriber()
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
//         this._callSubscriber()
//     }
// }
// export default store