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
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

type MapStateToPropsType = {
    profile: ProfileUserType,
    status: string,
    authorizedUsedId: number,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatusProfile: (userId: string) => void
    updateStatusProfile: (status: string) => void
    updatePhotoProfile: (e:any) => void
    saveProfileTC: (profile:any) => void
}
type PathParamsType = {
    userId: any; ////////
}
export type PropsType = RouteComponentProps<PathParamsType> & UsersProfilePropsType
export type UsersProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        // if(!userId) {
        //     this.props.history.push('/login');
        //     userId = this.props.authorizedUsedId;
        //     if(!userId) {
        //         this.props.history.push('/login');
        //     }
        // }
        this.props.getUserProfile(userId);
        this.props.getStatusProfile(userId);
    }


    componentDidMount() {
      this.refreshProfile();
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId != prevProps.match.params.userId ) {
            this.refreshProfile();
        }
    }

    render() {
        return (

            <Profile isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusProfile={this.props.updateStatusProfile}
                     updatePhoto={this.props.updatePhotoProfile}
                     saveProfile={this.props.saveProfileTC}
            />
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
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile ,updatePhotoProfile, saveProfileTC}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)