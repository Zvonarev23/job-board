import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useDispatch";
import { useAppSelector } from "../../hooks/useSelector";
import { JobCard } from "./JobCard/JobCard";

import styles from "./JobFeed.module.css";
import { fetchVacancies } from "../../store/vacanciesSlice/vacanciesSlice";
import { TVacancy } from "../../utils/types";
import { Modal } from "../Modal/Modal";
import { VacancyDetails } from "../Vacancy/VacancyDetails/VacancyDetails";
import { debounce } from "../../utils/debounce";

export const JobFeed = () => {
  const dispatch = useAppDispatch();
  const { vacancies, pagination, isLoading, error } = useAppSelector(
    (state) => state.vacancies
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);
  const [vacancyDetails, setVacancyDetails] = useState<TVacancy | null>(null);

  const addCurrentVacancyDetails = (info: TVacancy) => {
    setVacancyDetails(info);
  };

  const closeModal = () => {
    setVacancyDetails(null);
  };

  const handleScroll = (e: Event) => {
    const target = e.target as Document;

    if (pagination !== null) {
      if (
        target.documentElement.scrollHeight -
          (target.documentElement.scrollTop + window.innerHeight) <
          100 &&
        currentPage <= pagination.totalPages
      ) {
        setIsFetching(true);
        console.log("scroll");
      }
    }
  };

  const debouncedScroll = debounce(handleScroll, 500);

  useEffect(() => {
    document.addEventListener("scroll", debouncedScroll);

    return () => {
      document.removeEventListener("scroll", debouncedScroll);
    };
  }, [isFetching]);

  useEffect(() => {
    if (isFetching) {
      dispatch(fetchVacancies(currentPage))
        .then(() => setCurrentPage((prevState) => prevState + 1))
        .finally(() => setIsFetching(false));
    }
  }, [isFetching]);

  if (isLoading && vacancies.length === 0) {
    return (
      <section className={styles.wrapper}>
        <h2>Загрузка...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.wrapper}>
        <h2>Упс возникла ошибка...</h2>
      </section>
    );
  }

  if (!isLoading && !error && vacancies.length === 0) {
    return (
      <section className={styles.wrapper}>
        <h2>Таких вакансий нет :/</h2>
      </section>
    );
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.visually_hidden}>Список вакансий</h2>

      <ul className={styles.list}>
        {vacancies.map((vacancy, index) => (
          <li key={index}>
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
