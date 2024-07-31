import Title from '@/shared/ui/Typography/Title/Title';
import styles from './CallBack.module.scss'
import Form from '@/shared/ui/Form/Form';
import Image from 'next/image';
import { leftimg, programist } from '@/assets/images';

const CallBack = () => {
    return (
        <>
        <div className={styles.CallBack}>
            <Title
                content='Write me'
            />
            <div className={styles.Content}>
                <Form />
                <Image src={leftimg} alt='img' />
            </div>
            
        </div>
        </>
    );
}
 
export default CallBack;