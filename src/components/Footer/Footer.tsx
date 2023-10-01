import { Container } from "../Container/Container"
import logo from '../../images/footer_logo.svg'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <img src={logo} alt="Логотип WorkSpace" />

          <span className={styles.copyright}>© Work Space, 2023</span>

          <ul className={styles.contacts}>
            <li className={styles.contact}>Designer:
              <a className={styles.link} href="/"> Anastasia Ilina</a>
            </li>

            <li className={styles.contact}>Developer: 
              <a className={styles.link} href="/"> Evgeniy Zvonarev</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
