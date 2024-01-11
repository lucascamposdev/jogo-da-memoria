import styles from './MainPage.module.css'

// Components
import Entrance from '../components/Entrance/Entrance'
import Game from '../components/Game/Game'

// Hooks
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Exit from '../components/Exit/Exit'

enum bgColor {
  first = '#FE8FFA',
  second = '#787DF7',
  third = '#b1f778',
}

const MainPage = () => {

  const { page } = useContext(UserContext);

  const backgroundColor =
  page === 0
    ? bgColor.first
    : page === 1
    ? bgColor.second
    : bgColor.third;

  return (
    <main 
    className={styles.main} 
    style={{ backgroundColor }}>

      <Entrance isActive={page === 0}/>
      <Game isActive={page === 1}/> 
      <Exit isActive={page === 2}/>

    </main>
  )
}

export default MainPage