import Image, { StaticImageData } from "next/image";
import styles from './Project.module.scss'
import Text from "../Typography/Text/Text";
import LinkPath from "../Typography/Link/LinkPath";
import { github, planet } from "@/assets/images";

interface IProject{
    title: string,
    content: string,
    image: StaticImageData,
    githublink: string,
    deploy: string
}

const Project = ({
    title,
    content,
    image,
    githublink,
    deploy
}: IProject) => {
    return (
        <>
        <div className={styles.Project}>
            <span className={styles.Project_Title}>{title}</span>
            <div className={styles.Project_Ico}>
                <Image className={styles.Project_Ico_Image} src={image} alt="image" />
            </div>
            <Text
                content={content}
                
            />
            <div className={styles.Project_Ico_Links}>
                <LinkPath
                    content="GitHub"
                    path={githublink}
                    image={github}
                />
                <LinkPath
                    content="Website"
                    path={deploy}
                    image={planet}
                />
            </div>
        </div>
        </>
    );
}
 
export default Project;