import styles from './Title.module.scss'

interface ITitle{
    content: string
}

const Title = ({content}: ITitle) => {
    return (
        <>
        <h2 className={styles.Title}>
            {content}
        </h2>
        </>
    );
}
 
export default Title;