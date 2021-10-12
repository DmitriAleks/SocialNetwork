import React  from 'react'
import styles  from './FormsControls.module.css'
import { WrappedFieldProps} from 'redux-form';

export const FormControl:React.FC<WrappedFieldProps> = ({input, meta:{touched,error }, children,...props}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
//test
export const  Textarea = (props:WrappedFieldProps) =>{
    const {input, meta, ...restProps}=props;
    return <FormControl {...props}><textarea {...input } {...restProps}/></FormControl>
}
export const  Input = (props:WrappedFieldProps) => {
    const {input, meta,  ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
