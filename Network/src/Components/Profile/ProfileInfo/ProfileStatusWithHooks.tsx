import React, {ChangeEvent} from 'react'


type ProfileStatusType = {
    status: string
    updateStatusProfile: (status: string) => void
}

const ProfileStatusWithHooks = (props :ProfileStatusType ) => {


    return (
        <>
            {
                <div>
                    <span>{'' || 'noy status'}</span>
                </div>}
            {false &&
            <div>
                <input autoFocus={true}/>
            </div>}

        </>
    )
}

export default ProfileStatusWithHooks