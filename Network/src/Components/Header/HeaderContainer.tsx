import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI, usersAPI} from "../../api/api";

type MapDispatchToPropsType = {
    getAuthUserData:()=>void
}
type MapStateToPropsType = {
    isAuth: boolean
    login:string
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<UsersPropsType>{
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {

    return  <Header
        {...this.props}/>
}
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect (mapStateToProps,{getAuthUserData}) (HeaderContainer);