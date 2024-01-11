import styles from './ContentWrapper.module.css'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode;
    isActive: boolean
}

const ContentWrapper = ({ children, isActive }: Props) => {
  return (
    <section className={`${styles.container} ${isActive ? styles.open : styles.close}`}
      style={{ width: isActive ? '100%' : '0%' }}>
      <div className={styles.page}>
        {children}
      </div>
    </section>
  )
}

export default ContentWrapper