import { API_URL } from "../../../utils/constants";
import { TVacancy } from "../../../utils/types";
import styles from "./JobCard.module.css";

type JobCardProps = {
  info: TVacancy;
  addCurrentVacancyDetails: (info: TVacancy) => void;
};

export const JobCard = ({ info, addCurrentVacancyDetails }: JobCardProps) => {
  const { title, company, salary, type, format, experience, logo } = info;

  return (
    <article
      onClick={() => addCurrentVacancyDetails(info)}
      className={styles.card}
    >
      <img
        className={styles.logo}
        src={`${API_URL}${logo}`}
        alt={`Логотип компании ${company}`}
      />

      <p className={styles.name}>{company}</p>

      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.list}>
        <li>от {parseInt(salary).toLocaleString()}₽</li>

        <li>{type}</li>

        <li>{format}</li>

        <li>{experience}</li>
      </ul>
    </article>
  );
};
