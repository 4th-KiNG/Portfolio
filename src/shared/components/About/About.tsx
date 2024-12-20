import Title from "@/shared/ui/Typography/Title/Title";
import styles from "./About.module.scss";
import Text from "@/shared/ui/Typography/Text/Text";
import { Sandbox } from "..";

const About = () => {
  return (
    <>
      <div className={styles.About} id="about">
        <Title content="Обо мне" />
        <div className={styles.Content}>
          <Text
            content={
              "В процессе разработки outsource кейсов занимался разработкой макетов, адаптивной кроссплатформенной верстки и локализацией. Так же в процессе работы занимался подключением backend части проекта. При разработки интернет магазинов занимался SEO оптимизацией. Имею опыт написания API в пет проектах. Так же имеются навыки работы с WebSockets как на сервере, так и на клиенте. Оптимзировал скорость загрузки и передачи изображений, исправлял баги и занимался рефакторингом уже написанного кода."
            }
          />
          <Sandbox />
        </div>
      </div>
    </>
  );
};

export default About;
