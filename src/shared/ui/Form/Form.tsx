"use client"
import styles from './Form.module.scss'
import Input from '../Input/Input';
import { SendRespose } from '@/lib/api';

const Form = () => {
    return (
        <>
        <form className={styles.Form} onSubmit={SendRespose}>
            <Input
                inputType='input'
                type='text'
                name='username'
                placeholder='Name'
            />
            <Input
                inputType='input'
                type='email'
                name='useremail'
                placeholder='Gmail'
            />
            <Input
                inputType='textarea'
                name='message'
                placeholder='Message'
            />
            <Input
                inputType='input'
                type='submit'
                value='Send'
            />
        </form>
        </>
    );
}
 
export default Form;