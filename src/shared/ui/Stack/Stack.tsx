import Image,{ StaticImageData } from "next/image";
import Text from "../Typography/Text/Text";
import styles from './Stack.module.scss'

interface IStack{
    title: string,
    ico: StaticImageData,
    skills: string[]
}


const Stack = ({title, ico, skills} : IStack) => {
    return (
        <>
        <div className={styles.Stack}>
            <div className={styles.Stack_Title}>
                <Text
                    content={title}
                />
                <Image className={styles.Stack_Title_Ico} src={ico} alt="ico" />
            </div>
            
            <ul className={styles.Skills}>
                {skills.map((skill: string, index) => {
                    return(
                        <li key={index}>
                            <Text content={skill} />
                        </li>
                    )
                })}
            </ul>
        </div>
        

        </>
    );
}
 
export default Stack;