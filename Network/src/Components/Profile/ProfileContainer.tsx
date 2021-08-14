import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusProfile, updateStatusProfile, getUserProfile, ProfileUserType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import { compose } from 'redux';

type MapStateToPropsType = {
    profile: ProfileUserType,
    status: string,
    authorizedUsedId: number,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatusProfile:(userId: string) => void
    updateStatusProfile:(status: string) => void
}
type PathParamsType = {
    userId: any; ////////
}
export type PropsType = RouteComponentProps<PathParamsType> & UsersProfilePropsType
export type UsersProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if(!userId) {
            debugger
            userId = this.props.authorizedUsedId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatusProfile(userId);

    }
    render() {
        return (

            <Profile profile={this.props.profile} status={this.props.status} updateStatusProfile={this.props.updateStatusProfile}/>
        )
    }

}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUsedId: state.profilePage.profile.userId,
    isAuth: state.auth.isAuth,

})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatusProfile,updateStatusProfile}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)