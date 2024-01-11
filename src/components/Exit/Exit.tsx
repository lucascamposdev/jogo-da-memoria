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

type Props = {
    isActive: boolean;
}

const Exit = ({ isActive}: Props) => {

    const [ randomImage, setRandomImage ] = useState<number>(0)
    const { player, restartGame } = useContext(UserContext)
    
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

        <figure>
            <img src={`./images/cards/${cards[randomImage].img}`}/>
        </figure>

        <Button onClickFunc={restartGame} text='Jogar Novamente'/>
        </section>

    </ContentWrapper>
  )
}

export default Exit