import React from 'react';

import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileUserType, updateStatusProfile} from "../../redux/profile-reducer";

type ProfileType = {
    profile: ProfileUserType
    status:string
    updateStatusProfile:(status: string) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}  updateStatusProfile={props.updateStatusProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;