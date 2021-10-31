import React from "react";
import {Input, Textarea} from "../../common/FormControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import btn from './../../../assets/styles/ButtonStyle.module.css'

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button className={btn.btn}>save</button>
            </div>
            <b>Full name</b>: <Field placeholder={'fullName'} name={'fullName'}
                                     component={Input}/>
            <div>
                <b>Looking for a job </b>: <Field placeholder={'lookingForAJob'} name={'lookingForAJob'}
                                                  component={Input} type={'checkbox'}/>
            </div>
            <div>
                <b>My professional skills </b>: <Field placeholder={'lookingForAJobDescription'}
                                                       name={'lookingForAJobDescription'}
                                                       component={Textarea}/>
            </div>
            <div>
                <b>About me </b>: <Field placeholder={'aboutMe'}
                                         name={'aboutMe'}
                                         component={Textarea}/>
            </div>
        </form>
    )
}
//@ts-ignore
const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;