import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, ProfileUserType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    profile: ProfileUserType
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
type PathParamsType = {
    userId: string;
}
export type PropsType = RouteComponentProps<PathParamsType> & UsersProfilePropsType
export type UsersProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);

    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }

}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);