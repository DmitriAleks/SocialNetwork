import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusProfile,
    updateStatusProfile,
    getUserProfile,
    ProfileUserType,
    updatePhotoProfile, saveProfileTC
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {ProfileDataFormType} from "./ProfileInfo/ProfileDataForm";
import Preloader from "../common/Preloader/Preloader";
import {log} from "util";

type MapStateToPropsType = {
    profile: ProfileUserType,
    status: string,
    authorizedUsedId: number,
    isAuth: boolean,
    currentUser: number | null,
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatusProfile: (userId: string) => void
    updateStatusProfile: (status: string) => void
    updatePhotoProfile: (e: any) => void
    saveProfileTC: (profile: ProfileDataFormType) => void
}
type PathParamsType = {
    userId: any; ////////
}
export type PropsType = RouteComponentProps<PathParamsType> & UsersProfilePropsType
export type UsersProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
        this.props.getStatusProfile(userId);
    }


    componentDidMount() {
        this.refreshProfile();

    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }



    render() {
        debugger
        if (!this.props.profile) {
            <Redirect to="/login" />
        }
        return (

            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateStatusProfile={this.props.updateStatusProfile}
                     updatePhoto={this.props.updatePhotoProfile}
                     saveProfile={this.props.saveProfileTC}
                     currentUser={this.props.currentUser}
            />
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUsedId: state.profilePage.profile.userId,
    isAuth: state.auth.isAuth,
    currentUser: state.auth.id,
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatusProfile,
        updateStatusProfile,
        updatePhotoProfile,
        saveProfileTC
    }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)