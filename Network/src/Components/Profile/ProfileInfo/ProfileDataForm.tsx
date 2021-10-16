import React from "react";
import {Input, Textarea} from "../../common/FormControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

//34
const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save
                </button>
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
            {/*<div>*/}
            {/*    {profile.contacts &&*/}
            {/*    <div>*/}
            {/*        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
            {/*        return <Contact key={key} contactTitle={key} contactValue={key}/>*/}
            {/*    })}*/}
            {/*    </div>*/}
            {/*    }*/}
            {/*</div>*/}
        </form>
    )

}
//@ts-ignore
const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;