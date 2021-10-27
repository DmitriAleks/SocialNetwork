import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileUserType, updateStatusProfile} from "../../redux/profile-reducer";
import {ProfileDataFormType} from "./ProfileInfo/ProfileDataForm";

type ProfileType = {
    profile: ProfileUserType
    status: string
    updateStatusProfile: (status: string) => void
    isOwner: boolean
    updatePhoto: (e: any) => void
    saveProfile: (profile: ProfileDataFormType) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div className={style.test}>
            <ProfileInfo isOwner={props.isOwner} saveProfile={props.saveProfile} updatePhoto={props.updatePhoto}
                         profile={props.profile} status={props.status} updateStatusProfile={props.updateStatusProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;