import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
import {AddMessageFormRedux, FormDataDialogsType} from "./AddMessageForm/AddMessageForm";


const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogPage
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)




    let addNewMessage = (values: FormDataDialogsType) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;//требует стартовый стейт, иначе undefined

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )

}

export default Dialogs;
