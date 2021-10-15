import React, {ChangeEventHandler, useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileContactUserType, ProfileUserType} from "../../../redux/profile-reducer";
import userPhoto from '../../../assets/images/user.png';

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateStatusProfile: (status: string) => void
    isOwner: boolean
    updatePhoto: (e: any) => void
}


const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateStatusProfile, isOwner, updatePhoto}) => {
    const [editMode, setEditMode] = useState(false)
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            updatePhoto(e.target.files[0])
        }
    }

    console.log(profile.contacts)
    if (!profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div>
            {profile.aboutMe}
            <div className={s.descriptionBlock}>
                {profile.photos && profile.photos.large
                    ? <img src={profile.photos.large}/>
                    : <img src={userPhoto}/>}
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode ? <ProfileDataForm/>
                    : <ProfileData profile={profile}/>
                }

            </div>
            <div>{profile.fullName}</div>
            <ProfileStatusWithHooks status={status} updateStatusProfile={updateStatusProfile}/>
        </div>
    )
}
type ContactType = {
    contactTitle: string,
    contactValue: string
}
const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}
type ProFileDataType = {
    profile: ProfileUserType,
    isOwner: boolean,
}
const ProfileData: React.FC<ProFileDataType> = ({profile, isOwner}) => {
    return (
        <div>
            {isOwner && <div>
                <button>edit</button>
            </div>}
            <div>
                <b>Full name </b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job </b>: {profile.lookingForAJob ? 'yes' : 'no'}
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
                {profile.contacts &&
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={key}/>
                })}
                </div>
                }
            </div>
        </div>
    )

}
const ProfileDataForm: React.FC<ProFileDataType> = ({profile}) => {
    return (
        <div>
            <div>
                <b>Full name </b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job </b>: {profile.lookingForAJob ? 'yes' : 'no'}
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
                {profile.contacts &&
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={key}/>
                })}
                </div>
                }
            </div>
        </div>
    )

}
export default ProfileInfo;