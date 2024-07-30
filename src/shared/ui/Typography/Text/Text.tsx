import styles from './Text.module.scss'

interface IText{
    content: string
}

const Text = ({content} : IText) => {
    return (
        <>
        <p className={styles.Text}>
            {content}
        </p>
        </>
    );
}
 
export default Text;