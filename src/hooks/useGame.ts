import { useState, useEffect, useContext } from 'react'
import { Card as CardInterface } from '../data/cards'
import { UserContext } from '../context/UserContext';

interface useGameStates{
    cardOne: CardInterface | null;
    cardTwo: CardInterface | null;
    disabled: boolean;
}

interface useGameActions{
    pickCard: (card: CardInterface) => void;
    compareCards: () => void;
}

interface useGameResult extends useGameStates, useGameActions {}

const useGame = (): useGameResult => {

  const [ cardOne, setCardOne ] = useState<CardInterface | null>(null)
  const [ cardTwo, setCardTwo ] = useState<CardInterface | null>(null)
  const [ disabled, setDisabled ] = useState<boolean>(false)
  const { playerPoint, timer, startTimer } = useContext(UserContext)

  const pickCard = (card: CardInterface): void =>{
      cardOne ? setCardTwo(card) : setCardOne(card)
  }

  const compareCards = (): void => {
    if(timer == 0){
      startTimer()
    }

    if(cardOne && cardTwo){
        setDisabled(true)

        if(cardOne.id === cardTwo.id){
          cardOne.picked = true
          cardTwo.picked = true
          playerPoint();
        }else{
          // Not Match
        }
  
        setTimeout(() => {
          resetStates();
          setDisabled(false)
        }, 750);
      }
  }

  const resetStates = (): void =>{
      setCardOne(null)
      setCardTwo(null)
    }

    useEffect(() =>{
      if(cardOne && cardTwo){
        compareCards();
      }
    }, [cardOne, cardTwo])

  return{
      cardOne,
      cardTwo,
      disabled,
      pickCard,
      compareCards,
  }
}

export default useGame;