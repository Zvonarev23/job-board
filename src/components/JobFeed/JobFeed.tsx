import { JobCard } from "./JobCard/JobCard";

import styles from "./JobFeed.module.css";

export const JobFeed = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.visually_hidden}>Список вакансий</h2>

      <ul className={styles.list}>
        <li>
          <JobCard />
        </li>

        <li>
          <JobCard />
        </li>

        <li>
          <JobCard />
        </li>

        <li>
          <JobCard />
        </li>

        <li>
          <JobCard />
        </li>
      </ul>
    </section>
  );
};
