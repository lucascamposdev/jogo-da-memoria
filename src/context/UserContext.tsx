import { ReactNode, createContext, useState } from "react";
import { Card as CardInterface } from "../data/cards";
import cards from "../data/cards";
import shuffledDeck from "../utils/shuffledArray";

// O que meu contexto oferece
export interface UserContextInterface {
    player: Player;
    deck: CardInterface[];
    page: number;
    setPlayerName: (newName: string) => void;
    restartGame: () => void;
    playerPoint: () => void;
    nextPage: () => void;
    backPage: () => void;
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
    setPlayerName: (_newName: string) => {},
    restartGame: () => {},
    playerPoint: () => {},
    nextPage: () => {},
    backPage: () => {}
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
        backPage()
    }

    return (
        <UserContext.Provider 
        value={{ 
                player, 
                deck, 
                page,
                setPlayerName, 
                playerPoint, 
                restartGame,
                nextPage,
                backPage
            }}>
          {children}
        </UserContext.Provider>
      );
}





 