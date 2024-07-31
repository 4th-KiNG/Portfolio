import styles from './Input.module.scss'

interface IInput{
    inputType: "input" | "textarea"
    type?: string
    name?: string
    placeholder?: string
    value?: string
}

const Input = ({inputType, type, name, placeholder, value}: IInput) => {
    return (
        <>
        {inputType === "input" ?
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={styles.Input}
            value={value}
        />
        :
        <textarea
            name={name}
            placeholder={placeholder}
            className={styles.TextArea}
        />}
        </>
    );
}
 
export default Input;