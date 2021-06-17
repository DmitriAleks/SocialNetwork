import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAxios} from "../../api/api";

type MapDispatchToPropsType = {
    setAuthUserData:(userId: number, email: string, login: string) => void
}
type MapStateToPropsType = {
    isAuth: boolean
    login:string
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<UsersPropsType>{
    componentDidMount() {
        authAxios().then(response => {
                if(response.data.resultCode === 0) {
                  let {id, email, login} = response.data.data
                 this.props.setAuthUserData(id, email, login);
                }
            });
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

export default connect (mapStateToProps,{setAuthUserData}) (HeaderContainer);