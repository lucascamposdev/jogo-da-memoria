import styles from './Button.module.css'

type Props = {
    text: string;
    onClickFunc: () => void;
}

const Button = ({ text, onClickFunc }: Props) => {
  return (
    <button className={styles.button} type='submit' onClick={onClickFunc}>
        {text}
    </button>
  )
}

export default Button