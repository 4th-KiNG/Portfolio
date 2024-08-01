import Title from "@/shared/ui/Typography/Title/Title";
import styles from './About.module.scss'
import Text from "@/shared/ui/Typography/Text/Text";
import Sandbox from "../SandBox/SandBox";

const About = () => {
    return (
        <>
        <div className={styles.About} id="about">
            <Title content="About me" />
            <div className={styles.Content}>
                <Text
                    content={"In the process of developing freelance projects and websites under\
                    the key was involved in designing layouts and creating\
                    adaptive cross-platform layout and its\
                    localization. Involved in connecting the server part\
                    to projects. During the development of OpenSource projects\
                    worked on SEO optimization. Experienced in writing APIs\
                    in pet projects."}
                />
                <Sandbox />
            </div>
        </div>
        </>
    );
}
 
export default About;