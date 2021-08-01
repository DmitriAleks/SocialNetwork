import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileUserType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import { compose } from 'redux';

type MapStateToPropsType = {
    profile: ProfileUserType,
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
    profile: state.profilePage.profile,

})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)