import React from "react";
import style from './Dialogs.module.css'
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

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={style.container}>

            <div className={style.content}>

                <div className={style.messages}>

                    <span className={style.dialogsItems}>
                    {dialogsElements}
                </span>
                    <div >
                        <div>{messagesElements}</div>
                    </div>

                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>

        </div>
    )

}

export default Dialogs;
