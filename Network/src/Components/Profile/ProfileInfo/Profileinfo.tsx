import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileUserType} from "../../../redux/profile-reducer";

type ProfileInfoType = {
    profile: ProfileUserType
}


const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    console.log(props.profile)
    return (
        <div>
          <div>
              <img
                  src='https://i.ibb.co/M6N3CWk/unnamed.jpg' className={s.img}/>
          </div>
            {props.profile.aboutMe}
            <div className={s.descriptionBlock}>
                {props.profile.photos && props.profile.photos.large && <img  src={props.profile.photos.large} />}

            </div>
            <div>{props.profile.fullName}</div>

        </div>
    )
}

export default ProfileInfo;