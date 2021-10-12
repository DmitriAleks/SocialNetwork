import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileUserType} from "../../../redux/profile-reducer";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileUserType
    status:string
    updateStatusProfile:(status: string) => void
}


const ProfileInfo: React.FC<ProfileInfoType> = ({profile,status,updateStatusProfile}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            {profile.aboutMe}
            <div className={s.descriptionBlock}>
                {profile.photos && profile.photos.large && <img src={profile.photos.large}/>}

            </div>
            <div>{profile.fullName}</div>
                         <ProfileStatusWithHooks status={status} updateStatusProfile={updateStatusProfile} />
        </div>
    )
}

export default ProfileInfo;