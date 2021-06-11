import React from 'react';

import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../redux/profile-reducer";

type ProfileType = {
    profile: ProfileUserType
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;