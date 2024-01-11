import styles from './Exit.module.css'

// Components 
import ContentWrapper from "../shared/ContentWrapper/ContentWrapper";
import Title from '../shared/Title/Title';
import BigText from "../shared/BigText/BigText";
import Button from "../shared/Button/Button";

// Context
import { UserContext } from "../../context/UserContext";

// React
import { useContext, useEffect, useState } from 'react';

// Utils
import cards from '../../data/cards';
import formatTime from '../../utils/formatTime';

type Props = {
    isActive: boolean;
}

const Exit = ({ isActive}: Props) => {

    const [ randomImage, setRandomImage ] = useState<number>(0)
    const { player, restartGame, timer } = useContext(UserContext)


    
      useEffect(() => {
        if(isActive){
          setRandomImage(Math.floor(Math.random() * cards.length))
        }
      }, [isActive]);

  return (
    <ContentWrapper isActive={isActive}>
        <Title text='Jogo da Memória'/>

        <section className={styles.container}>
        <BigText text={`Parabéns ${player.name}, você venceu!`}/>

        <div>
        <figure>
            <img src={`./images/cards/${cards[randomImage].img}`}/>
        </figure>

        <span className={styles.wrapper}>
            <h3>seu tempo foi</h3>
            <h1>
              {formatTime(timer)}
            </h1>
            <p>
              tente novamente para melhorar seu desempenho
            </p>
        </span>
        </div>

        <Button onClickFunc={restartGame} text='Jogar Novamente'/>
        </section>
    </ContentWrapper>
  )
}

export default Exit