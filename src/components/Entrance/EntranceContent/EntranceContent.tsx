import styles from './EntranceContent.module.css'

// Components
import BigText from '../../shared/BigText/BigText'
import Button from '../../shared/Button/Button'

// Context
import { UserContext } from '../../../context/UserContext'

// React
import { useState, useContext } from 'react'

// Utils
import formatName from '../../../utils/formatName'
import Form from '../../shared/Form/Form'

const EntranceContent = () => {

    const [ inputVal, setInputVal ] = useState<string>('')
    const { setPlayerName, nextPage, page } = useContext(UserContext)

    const submitForm = ( ):void => {
        if(inputVal.length > 2 && page == 0){
            setPlayerName(formatName(inputVal))
            nextPage()
        }
    }

  return (
    <section className={styles.container}>

        <div className={styles.wrapper}>
            <BigText text='Qual o seu nome?'/>
            <Form submitFunc={submitForm}>
                <input type="text" onChange={(e) => setInputVal(e.target.value)}/>
            </Form>
        </div>

        <span>
            {inputVal.length > 2 && <Button text='Próximo >' onClickFunc={submitForm}/>}
        </span>
        
    </section>
  )
}

export default EntranceContent