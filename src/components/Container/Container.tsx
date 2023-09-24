import styles from './Container.module.css'

type LayoutProps = {
  children: React.ReactNode;
};

export const Container = ({children}: LayoutProps) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}
