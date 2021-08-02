import React from 'react'


type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType, any> {
    state = {
        editMode: false
    }
    activateEditMode =()=>  {
        console.log(this)
        this.setState({
            editMode : true
        })
    }
    deActivateEditMode =()=>  {
        this.setState({
            editMode : false
        })
    }
    render() {
        const {status} = this.props
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{status}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input value={status} onBlur={this.deActivateEditMode} autoFocus={true}/>
                </div>}

            </>
        )
    }

}

export default ProfileStatus