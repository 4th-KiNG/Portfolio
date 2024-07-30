import LinkPath from '@/shared/ui/Typography/Link/LinkPath';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
        <header className={styles.Header}>
            <LinkPath 
                path='https://github.com/4th-KiNG'
                content='Write me'
            />
            <LinkPath 
                path='https://github.com/4th-KiNG'
                content='About'
            />
            <LinkPath 
                path='https://github.com/4th-KiNG'
                content='Projects'
            />
        </header>
        </>
    );
}
 
export default Header;