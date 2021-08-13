import React from 'react';
import {Field, InjectedFormProps, reduxForm } from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Input} from "../common/FormControls/FormsControls";

type FormDataType = {
    login:string,
    password: string,
    rememberMe: boolean,
}
let maxLength15= maxLengthCreator(15)
const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input} validate={[required,maxLength15]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required,maxLength15]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login