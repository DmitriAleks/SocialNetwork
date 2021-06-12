import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateUsersType, UsersType} from "../../redux/users-reducer";
import {RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {
    userId:string;
}
type PropsType = RouteComponentProps<PathParamsType> & {
    someString: string,
}

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        debugger
        let userId = this.props.math.params.userId
        if(!userId){
            userId=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
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
export type UsersProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    profile: ProfileUserType
}
type MapDispatchToPropsType = {
    setUserProfile: (users: Array<ProfileUserType>) => void
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent =withRouter(ProfileContainer)


export default connect (mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent);