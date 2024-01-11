import { ReactNode, createContext, useState, useRef } from "react";
import { Card as CardInterface } from "../data/cards";
import cards from "../data/cards";
import shuffledDeck from "../utils/shuffledArray";

// O que meu contexto oferece
export interface UserContextInterface {
    player: Player;
    deck: CardInterface[];
    page: number;
    timer: number;
    setPlayerName: (newName: string) => void;
    restartGame: () => void;
    playerPoint: () => void;
    nextPage: () => void;
    backPage: () => void;
    startTimer: () => void;
    stopTimer: () => void;
    resetTimer: () => void;
}

// Tipo do objeto player
export type Player = {
    name: string;
    points: number;
}

// Valor inicial do contexto
const defaultPlayerState = {
    player: {
        name: '',
        points: 0
    },
    page: 0,
    timer: 0,
    setPlayerName: (_newName: string) => {},
    restartGame: () => {},
    playerPoint: () => {},
    nextPage: () => {},
    backPage: () => {},
    startTimer: () => {},
    stopTimer: () => {},
    resetTimer: () => {}
} as UserContextInterface

// cria o contexto
export const UserContext = createContext(defaultPlayerState)

type UserProviderProps = {
    children: ReactNode
}

export default function UserProvider ({ children }: UserProviderProps){

    const [ player, setPlayer ] = useState<Player>({name: '', points: 0})
    const [ deck, setDeck ] = useState<CardInterface[]>(shuffledDeck(cards))
    const [ page, setPage ] = useState<number>(0)
    const [ timer, setTimer ] = useState<number>(0)
    const intervalIdRef = useRef<number>();

    const nextPage = (): void =>{
      setPage(prevState => prevState + 1)
    }

    const backPage = (): void =>{
        setPage(prevState => prevState - 1)
    }

    const setPlayerName = (newName: string) =>{
        setPlayer({ ... player, name: newName})
    }

    const playerPoint = (): void => {
        setPlayer({ ...player, points: player.points + 1})
    }

    const restartGame = (): void => {
        cards.map(card => card.picked = false)
        setDeck(shuffledDeck(cards))
        setPlayer({ ...player, points: 0})
        resetTimer()
        backPage()
    }

    const startTimer = (): void => {
        intervalIdRef.current = setInterval(() => {
          setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
      };

    const stopTimer = (): void => {
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
        }
    };

    const resetTimer = () => {
        setTimer(0);
      };

    return (
        <UserContext.Provider 
        value={{ 
                player, 
                deck, 
                page,
                timer,
                setPlayerName, 
                playerPoint, 
                restartGame,
                nextPage,
                backPage,
                startTimer,
                stopTimer,
                resetTimer
            }}>
          {children}
        </UserContext.Provider>
      );
}





 