import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import { ProfileType } from "../../../redux/profile-reducer";

type ProfileInfoType = {
    profile: ProfileType
}


const ProfileInfo = (props:ProfileInfoType) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <img
                src='https://i.ibb.co/M6N3CWk/unnamed.jpg'className={s.img}/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                Avatar + description</div>
            <div>{props.profile.aboutMe}</div>

        </div>
    )
}

export default ProfileInfo;