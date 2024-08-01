import LinkPath from '@/shared/ui/Typography/Link/LinkPath';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
        <header className={styles.Header}>
            <LinkPath 
                path='/#write'
                content='Write me'
            />
            <LinkPath 
                path='/#about'
                content='About'
            />
            <LinkPath 
                path='/#projects'
                content='Projects'
            />
        </header>
        </>
    );
}
 
export default Header;