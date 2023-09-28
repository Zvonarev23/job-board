import { API_URL } from "../../../utils/constants";
import { TVacancy } from "../../../utils/types";
import styles from "./VacancyDetails.module.css";

type VacancyDetailsProps = {
  info: TVacancy;
};

export const VacancyDetails = ({ info }: VacancyDetailsProps) => {
  const {
    title,
    company,
    description,
    email,
    salary,
    type,
    format,
    experience,
    location,
    logo,
  } = info;

  return (
    <div className={styles.container}>
      <div className={styles.company}>
        <img
          className={styles.logo}
          src={`${API_URL}${logo}`}
          alt={`Логотип компании ${company}`}
        />

        <div>
          <p className={styles.name}>{company}</p>

          <h2 className={styles.title}>{title}</h2>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.description_container}>
          <p>{description}</p>
        </div>

        <ul className={styles.conditions}>
          <li className={styles.item}>
            от {parseInt(salary).toLocaleString()}₽
          </li>
          <li className={styles.item}>{type}</li>
          <li className={styles.item}>{format}</li>
          <li className={styles.item}>{experience}</li>
          <li className={styles.item}>{location}</li>
        </ul>
      </div>

      <p className={styles.action}>
        <span>Отправляйте резюме на </span>
        <a className={styles.link} href={`mailto: ${email}`}>
          {email}
        </a>
      </p>
    </div>
  );
};
