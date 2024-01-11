import styles from './Card.module.css'

// Interface
import { Card as CardInterface } from '../../../data/cards'

type Props = {
    card: CardInterface
    pickCard: (card: CardInterface) => void;
    isFlipped: boolean;
    disabled: boolean;
}

const Card = ({ card, pickCard, isFlipped, disabled }: Props) => {

  const handleClick = () => {
    if(!isFlipped && !disabled){
      pickCard(card)
    }
  };

  return (
    <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleClick}>
      <div className={styles.card_inner}>
        <div className={styles.card_front}></div>
        <div className={styles.card_back}>
            <img src={`./images/cards/${card.img}`}></img>
        </div>
      </div>
    </div>
  )
}

export default Card