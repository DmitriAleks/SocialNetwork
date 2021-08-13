import React, {ChangeEvent } from 'react'


type ProfileStatusType = {
    status: string
    updateStatusProfile:(status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType, any> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode =()=>  {
        this.setState({
            editMode : true,
        })
    }
    deActivateEditMode =()=>  {
        this.setState({
            editMode : false
        })
        this.props.updateStatusProfile(this.state.status);
    }
    //
    onStatusChange= (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status:  e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps:Readonly<ProfileStatusType>, prevState:Readonly<any>, snapshot?:any) {
        if(prevProps.status !== this.props.status){
         this.setState({
             status: this.props.status
         })
        }
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.state.status || 'noy status'}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} value={this.state.status} onBlur={this.deActivateEditMode} autoFocus={true}/>
                </div>}

            </>
        )
    }

}

export default ProfileStatus