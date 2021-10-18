import React, {ChangeEvent, useEffect, useState} from 'react'


type ProfileStatusType = {
    status: string
    updateStatusProfile: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <>
            {!editMode &&

            <div>
              <b>Status:</b>  <span onDoubleClick={activateMode}>{status === '' ? 'noy status' : status} </span>
            </div>}
            {editMode &&
            <div>
                <input onBlur={deActivateEditMode} value={status} autoFocus={true} onChange={onStatusChange}/>
            </div>}

        </>
    )
}

export default ProfileStatusWithHooks