import Title from "@/shared/ui/Typography/Title/Title";
import styles from "./MainInfo.module.scss";
import WritableText from "@/shared/ui/Typography/WritableText/WritableText";
import Image from "next/image";
import { github, mail, me } from "@/assets/images";
import LinkPath from "@/shared/ui/Typography/Link/LinkPath";

const MainInfo = () => {
  return (
    <>
      <div className={styles.MainInfo}>
        <div className={styles.Content}>
          <Title content="Александр Писанко" />
          <WritableText />
          <LinkPath
            content="GitHub"
            path="https://github.com/4th-KiNG"
            image={github}
          />
          <LinkPath content="ozoki46@gmail.com" image={mail} />
        </div>
        <Image src={me} alt="me" className={styles.Me} />
      </div>
    </>
  );
};

export default MainInfo;
