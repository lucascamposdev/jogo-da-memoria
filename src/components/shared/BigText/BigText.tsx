import styles from './BigText.module.css'

type Props = {
    text: string
}

const BigText = ({ text }: Props) => {
  return (
    <div className={styles.container}>
        <h1>{text}</h1>
    </div>
  )
}

export default BigText