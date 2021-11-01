import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import btn from './../../../assets/styles/ButtonStyle.module.css'

export type FormDataDialogsType = {
    newMessageBody: string,
}
let maxLength100= maxLengthCreator(100)
const AddMessageForm: React.FC<InjectedFormProps<FormDataDialogsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength100]}
                       name={'newMessageBody'} placeholder='Enter your message'/>
            </div>
            <div>
                <button className={btn.btn}>Send</button>
            </div>
        </form>
    )

}


export const AddMessageFormRedux = reduxForm<FormDataDialogsType>({form: 'dialogAddMessageForm'})(AddMessageForm)