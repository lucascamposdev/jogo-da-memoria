import { UserContext } from '../../../context/UserContext'
import { useContext } from 'react'
import styles from './GameHeader.module.css'

const GameHeader = () => {

  const { player } = useContext(UserContext)

  return (
    <header className={styles.header}>
        <h1>Olá, {player.name}</h1>
    </header>
  )
}

export default GameHeader