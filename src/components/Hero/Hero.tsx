import { Container } from "../Container/Container"

import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <Container>
      <section className={styles.wrapper}>
        <h1 className={styles.title}>Найди работу
          <span className={styles.blue_title}>своей мечты</span>
        </h1>
      </section>
    </Container>
  )
}
