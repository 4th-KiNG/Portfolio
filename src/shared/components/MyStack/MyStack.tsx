import Title from '@/shared/ui/Typography/Title/Title';
import styles from './MyStack.module.scss'
import { StaticImageData } from 'next/image';
import { backend, frontend, other } from '@/assets/images';
import Stack from '@/shared/ui/Stack/Stack';

interface IStack{
    title: string,
    ico: StaticImageData,
    skills: string[]
}



const MyStack = () => {

    const AllStack: IStack[] = [
        {
            title: "Frontend",
            ico: frontend,
            skills: [
                "· HTML/CSS/SCSS",
                "· JS(ES6+)/TS",
                "· React/Next.js",
                "· Redux/Mobx",
                "· Tanstack Query",
                "· Axios",
                "· Matter.js/Framer Motion",
                "· i18n"
            ]
        },
        {
            title: "Backend",
            ico: backend,
            skills: [
                "· Node js/Express js/Nest js",
                "· PostgreSQL/MongoDB",
                "· TypeORM/Mongoose",
                "· Minio"
            ]
        },
        {
            title: "Other",
            ico: other,
            skills: [
                "· Git",
                "· Docker"
            ]
        }
    ]

    return (
        <>
        <div className={styles.MyStack}>
            <Title
                content='My stack'
            />
            <div className={styles.Stacks}>
                {AllStack.map((stack: IStack, index) => {
                    return (
                        <>
                        <Stack
                            {...stack} key={index}
                        />
                        </>
                    )
                })}
            </div>
        </div>
        </>
    );
}
 
export default MyStack;