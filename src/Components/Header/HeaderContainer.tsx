import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapDispatchToPropsType = {
    // getAuthUserData: () => void
    logout: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<UsersPropsType> {
    // componentDidMount() {
    //    this.props.getAuthUserData();
    // }

    render() {

        return <Header
            {...this.props}/>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);