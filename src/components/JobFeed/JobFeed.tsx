import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useDispatch";
import { useAppSelector } from "../../hooks/useSelector";
import { JobCard } from "./JobCard/JobCard";

import styles from "./JobFeed.module.css";
import { fetchVacancies } from "../../store/vacanciesSlice/vacanciesSlice";
import { TVacancy } from "../../utils/types";
import { Modal } from "../Modal/Modal";
import { VacancyDetails } from "../Vacancy/VacancyDetails/VacancyDetails";

export const JobFeed = () => {
  const dispatch = useAppDispatch();
  const { vacancies, isLoading, error } = useAppSelector(
    (state) => state.vacancies
  );

  const [vacancyDetails, setVacancyDetails] = useState<TVacancy | null>(null);

  const addCurrentVacancyDetails = (info: TVacancy) => {
    setVacancyDetails(info);
  };

  const closeModal = () => {
    setVacancyDetails(null);
  };

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
        {vacancies.map((vacancy) => (
          <li key={vacancy.id}>
            <JobCard
              addCurrentVacancyDetails={addCurrentVacancyDetails}
              info={vacancy}
            />
          </li>
        ))}
      </ul>
      {vacancyDetails && (
        <Modal closeModal={closeModal}>
          <VacancyDetails info={vacancyDetails} />
        </Modal>
      )}
    </section>
  );
};
