import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Input} from "../common/FormControls/FormsControls";
import {connect, useSelector} from "react-redux";
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from "../../redux/redux-store";
import style from '../common/FormControls/FormsControls.module.css'

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha:string
}
let maxLength25 = maxLengthCreator(25)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const captcha = useSelector<AppStateType, string>(state => state.auth.captchaUrl)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required, maxLength25]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLength25]}
                       type={'password'}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            {captcha && <div>
                <img src={captcha}/>
                <Field placeholder={'Symbols from image'} name={'captcha'} component={Input} validate={[required, maxLength25]}/>
            </div>}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string
}
const Login = (props: any) => { //any
    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }

}
export default connect(mapStateToProps, {
    login,
})(Login)