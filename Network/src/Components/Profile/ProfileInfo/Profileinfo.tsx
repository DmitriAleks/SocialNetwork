import React, { ChangeEventHandler } from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileUserType} from "../../../redux/profile-reducer";
import userPhoto from '../../../assets/images/user.png';

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateStatusProfile: (status: string) => void
    isOwner: boolean
    updatePhoto: () => void
}


const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateStatusProfile,isOwner,updatePhoto}) => {

    const onMainPhotoSelected = (e:any) => {
        if (e.target.files.length) {
            updatePhoto(e.target.files[0])
        }
    }



    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            {profile.aboutMe}
            <div className={s.descriptionBlock}>
                {profile.photos && profile.photos.large
                    ? <img src={profile.photos.large}/>
                    : <img src={userPhoto}/>}
                {isOwner && <input type={'file'}  onChange={onMainPhotoSelected}/>}
            </div>
            <div>{profile.fullName}</div>
            <ProfileStatusWithHooks status={status} updateStatusProfile={updateStatusProfile}/>
        </div>
    )
}

export default ProfileInfo;