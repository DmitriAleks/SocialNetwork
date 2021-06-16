import React from 'react';
import Header from './Header';
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data.login
                 this.props.setAuthUserData(id, email, login);
                }
            });
    }
    render() {
    return  <Header
        isAuth={this.props.data.isAuth}
    login={this.props.data.login}/>
}
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default connect (mapStateToProps,{setAuthUserData}) (HeaderContainer);