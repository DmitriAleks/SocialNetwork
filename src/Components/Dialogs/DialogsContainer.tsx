import React from "react";
import {InitialStateType, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";

type MapStateToPropsType = {
    dialogPage: InitialStateType,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    sendMessage: (newMessageBody:string) => void,
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {

        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


//const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
// export default DialogsContainer

export default compose<React.ComponentType>(
    withAuthRedirect
    ,connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);