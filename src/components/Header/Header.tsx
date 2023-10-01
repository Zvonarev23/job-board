import logo from "../../images/header_logo.svg";
import styles from "./Header.module.css";

import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <section className={styles.wrapper}>
          <img className={styles.logo} src={logo} alt="Логотип WorkSpace" />
          <a href="/" className={`${styles.link} ${styles.link_dark}`}>
            Посмотреть вакансии
          </a>

          <a href="/" className={`${styles.link} ${styles.link_light}`}>
            + Добавить новую вакансию
          </a>
        </section>
      </Container>
    </header>
  );
};
