import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateUsersType, UsersType} from "../../redux/users-reducer";


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render(){
        return (
            <Profile profile={this.props.profile}/>
        )
    }

}
// export type UsersProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
// type MapStateToPropsType = {
//     profile: InitialStateUsersType
// }
// type MapDispatchToPropsType = {
//     setUserProfile: (users: Array<ProfileUserType>) => void
// }

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})



export default connect (mapStateToProps,{setUserProfile})(ProfileContainer);