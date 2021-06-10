import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: any
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

        </div>
    )
}

export default ProfileInfo;