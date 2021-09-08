import React, { useState} from 'react'


type ProfileStatusType = {
    status: string
    updateStatusProfile: (status: string) => void
}

const ProfileStatusWithHooks = (props :ProfileStatusType ) => {
let [state, setState ] = useState<boolean>(false)
const activateMode = () => {
    setState(true)
}
    const deActivateEditMode = () => {
        setState(false)
    }
    return (
        <>
            {!state &&
                <div>
                    <span onDoubleClick={activateMode}>{'' || 'noy status'} </span>
                </div>}
            {state &&
            <div>
                <input onBlur={deActivateEditMode} autoFocus={true}/>
            </div>}

        </>
    )
}

export default ProfileStatusWithHooks