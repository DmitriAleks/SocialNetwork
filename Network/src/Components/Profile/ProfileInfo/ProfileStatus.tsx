import React from 'react'

const ProfileStatus = () => {


    return (
        <>
            <div>
                <span>{'props.status'}</span>
            </div>
            <div>
                <input value={'props.status'}/>
            </div>
        </>
    )
}
export default ProfileStatus