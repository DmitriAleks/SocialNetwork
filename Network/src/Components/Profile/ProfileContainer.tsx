import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    profile: ProfileUserType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileUserType) => void
}
type PathParamsType = {
    userId: string;
}
export type PropsType = RouteComponentProps<PathParamsType> & UsersProfilePropsType
export type UsersProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        usersAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
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


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);