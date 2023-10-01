import { Container } from "../Container/Container";
import { Filter } from "../Filter/Filter";
import { JobFeed } from "../JobFeed/JobFeed";

import { useState } from "react";

import styles from "./Vacancy.module.css";

export const Vacancy = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <Container>
      <div className={styles.wrapper}>
        <button
          onClick={() => setIsOpenFilter(!isOpenFilter)}
          className={styles.button}
        >
          Фильтр
        </button>

        <div className={styles.vacancies}>
          <Filter isOpenFilter={isOpenFilter} />
          <JobFeed />
        </div>
      </div>
    </Container>
  );
};
