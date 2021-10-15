import React from "react";
import {Input, Textarea} from "../../common/FormControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type ProfileDataFormType = {
    fullName:any
    lookingForAJob:any
    lookingForAJobDescription:any
}

//34
const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button onClick={() => {
                }}>save
                </button>
            </div>
            <div>
                <b>Full name </b>: <Field placeholder={'Full name'} name={'fullName'} component={Input}
                                          validate={[required, 25]}/>
            </div>
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
                <b>About me </b>: <Field placeholder={'lookingForAJobDescription'}
                                         name={'lookingForAJobDescription'}
                                         component={Textarea}/>
            </div>
            <div>
                {/*{profile.contacts &&*/}
                {/*<div>*/}
                {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
                {/*    return <Contact key={key} contactTitle={key} contactValue={key}/>*/}
                {/*})}*/}
                {/*</div>*/}
                {/*}*/}
            </div>
        </form>
    )

}
//@ts-ignore
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;