import LinkPath from "@/shared/ui/Typography/Link/LinkPath";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <LinkPath path="/#write" content="Контакты" />
        <LinkPath path="/#about" content="Обо мне" />
        <LinkPath path="/#projects" content="Проекты" />
      </header>
    </>
  );
};

export default Header;
