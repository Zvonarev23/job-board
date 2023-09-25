import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useDispatch";
import { useAppSelector } from "../../hooks/useSelector";
import { JobCard } from "./JobCard/JobCard";

import styles from "./JobFeed.module.css";
import { fetchVacancies } from "../../store/vacanciesSlice/vacanciesSlice";

export const JobFeed = () => {
  const dispatch = useAppDispatch();
  const { vacancies, isLoading, error } = useAppSelector(
    (state) => state.vacancies
  );

  useEffect(() => {
    dispatch(fetchVacancies());
  }, []);

  if (isLoading && vacancies.length === 0) {
    return <h1>Загрузка...</h1>;
  }

  if (error) {
    return <h1>Упс возникла ошибка...</h1>;
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.visually_hidden}>Список вакансий</h2>

      <ul className={styles.list}>
        {vacancies.map(({ id, ...vacancyInfo }) => (
          <li key={id}>
            <JobCard {...vacancyInfo} />
          </li>
        ))}
      </ul>
    </section>
  );
};
