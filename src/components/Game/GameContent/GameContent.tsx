import styles from './GameContent.module.css'

// Components
import Card from '../Card/Card'

// Interface
import useGame from '../../../hooks/useGame';
import { UserContext } from '../../../context/UserContext';

// React
import { useContext, useEffect } from 'react'

// Utils
import cards from '../../../data/cards';

const GameContent = () => {

  const { cardOne, cardTwo, disabled, pickCard} = useGame();
  const { deck, player, nextPage, stopTimer } = useContext(UserContext);

  useEffect(() =>{
    if(player.points >= cards.length){
      stopTimer()
      nextPage()
    }
  }, [player])

  return (
    <section className={styles.container}>
      {deck.map((card, i) => {
          return <Card 
          key={i} 
          card={card} 
          isFlipped={cardOne == card || cardTwo == card || card.picked}
          pickCard={pickCard}
          disabled={disabled}
          />
        })}
    </section>
  )
}

export default GameContent