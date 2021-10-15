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
    updatePhoto: (e:any) => void
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
                <div>
                    <div>
                        <b>Full name </b>: {profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job </b>: {profile.lookingForAJob ? 'yes': 'no'}
                    </div>
                    {profile.lookingForAJob &&
                    <div>
                        <b>My professional skills </b>: {profile.lookingForAJobDescription}
                    </div>
                    }
                    <div>
                        <b>About me </b>: {profile.aboutMe}
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys(profile.contacts).map(key=>{
                           return <div>asdasd</div>
                    })}
                    </div>
                </div>

            </div>
            <div>{profile.fullName}</div>
            <ProfileStatusWithHooks status={status} updateStatusProfile={updateStatusProfile}/>
        </div>
    )
}

const Contact:React.FC<any> = ({contactTitle,contactValue }) => {
    return <div><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;