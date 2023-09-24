import styles from "./JobCard.module.css";

export const JobCard = () => {
  return (
    <article className={styles.card}>
      <img className={styles.logo} src="#" alt="Логотип компании" />

      <p className={styles.name}>ВкусВилл</p>

      <h3 className={styles.title}>Повар-кондитер</h3>

      <ul>
        <li className={styles.item}>от 50 000₽</li>

        <li className={styles.item}>частичная занятость</li>

        <li className={styles.item}>офис</li>

        <li className={styles.item}>опыт не важен</li>
      </ul>
    </article>
  );
};
