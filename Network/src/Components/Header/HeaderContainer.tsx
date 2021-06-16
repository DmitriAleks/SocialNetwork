import React from 'react';
import Header from './Header';
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateUsersType, UsersType} from "../../redux/users-reducer";
import {setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {

        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data.login
                 this.props.setAuthUserData(userId, email, login);
                }
            });
    }
    render() {
    return  <Header/>
}
}
type MapStateToPropsType = {
    usersPage: InitialStateUsersType
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
}

export default connect (MapStateToPropsType,{setAuthUserData}) (HeaderContainer);