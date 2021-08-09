import React from 'react';
import reduxForm, { InjectedFormProps } from 'redux-form/lib/reduxForm';
import {Field} from "redux-form";

type FormDataType = {
    login:string,
    password: string,
    rememberMe: boolean,
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field component={'checkbox'} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
//21=27
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