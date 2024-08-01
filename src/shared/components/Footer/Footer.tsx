import LinkPath from '@/shared/ui/Typography/Link/LinkPath';
import styles from './Footer.module.scss'
import { telegram, vk } from '@/assets/images';

const Footer = () => {
    return (
        <>
        <footer className={styles.Footer}>
            <LinkPath
                content='Me in Telegram'
                image={telegram}
                path='https://t.me/Ozoki46'
            />
            <LinkPath
                content='Me in VK'
                image={vk}
                path='https://vk.com/4th_king'
            />
        </footer>
        </>
    );
}
 
export default Footer;