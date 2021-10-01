import {addPostActionCreator, deletePost, PostType, profileReducer, ProfileUserType} from "./profile-reducer";
import React from "react";

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

test('new post should be added', () => {
    //1 Исходные данные
    let action =   addPostActionCreator('It-kamasutra.com');

        // 2 Экшен
    let newState = profileReducer(initialState,action);
// 3 ожидание
   expect(newState.posts.length).toBe(5);
   expect(newState.posts[4].message).toBe('It-kamasutra.com')
});
test('after deleting length of messages should be decrement', () => {
    //1 Исходные данные
    let action =deletePost(1)

    // 2 Экшен
    let newState = profileReducer(initialState,action);
// 3 ожидание
    expect(newState.posts.length).toBe(3);
});
