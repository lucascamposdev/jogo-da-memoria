// Components
import Title from '../shared/Title/Title';
import ContentWrapper from '../shared/ContentWrapper/ContentWrapper'

// Utils
import EntranceContent from './EntranceContent/EntranceContent';

type Props = {
    isActive: boolean 
}

const Entrance = ({ isActive }: Props) => {

  return (
    <ContentWrapper isActive={isActive}>
        <Title text='Jogo da Memória'/>
        <EntranceContent/>
    </ContentWrapper>
  )
}

export default Entrance