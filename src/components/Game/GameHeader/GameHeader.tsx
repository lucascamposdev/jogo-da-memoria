import { UserContext } from '../../../context/UserContext'
import { useContext } from 'react'
import styles from './GameHeader.module.css'
import formatTime from '../../../utils/formatTime'

const GameHeader = () => {

  const { player, timer } = useContext(UserContext)

  return (
    <header className={styles.header}>
        <h1>Olá, {player.name}</h1>
        <h1 className={styles.time}>{formatTime(timer)}</h1>
    </header>
  )
}

export default GameHeader