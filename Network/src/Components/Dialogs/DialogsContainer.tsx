import React from "react";
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";

type MapStateToPropsType = {
    dialogPage: InitialStateType,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void,
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
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
let AuthRedirectComponent = (props:DialogsPropsType) =>{
    return <Dialogs {...props}/>
}

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent));


export default DialogsContainer;