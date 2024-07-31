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
            />
            <LinkPath
                content='Me in VK'
                image={vk}
            />
        </footer>
        </>
    );
}
 
export default Footer;