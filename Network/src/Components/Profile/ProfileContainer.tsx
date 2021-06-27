import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileUserType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type MapStateToPropsType = {
    profile: ProfileUserType,
    isAuth: boolean,
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
        if (this.props.isAuth=== false) return <Redirect to={'/login'}/>;
        return (
            <Profile profile={this.props.profile}/>
        )
    }

}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);