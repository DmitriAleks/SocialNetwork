import React from 'react'


type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType, any> {
    state = {
        editMode: false
    }

    
    render() {
        const {status} = this.props
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span>{status}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input value={status}/>
                </div>}

            </>
        )
    }

}

export default ProfileStatus