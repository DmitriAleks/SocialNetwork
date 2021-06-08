import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img
                src='https://i.ibb.co/M6N3CWk/unnamed.jpg'className={s.img}/>
            <div className={s.descriptionBlock}>Avatar + description</div>

        </div>
    )
}

export default ProfileInfo;