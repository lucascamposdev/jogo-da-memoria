// Components
import ContentWrapper from '../shared/ContentWrapper/ContentWrapper'
import GameHeader from './GameHeader/GameHeader';
import GameContent from './GameContent/GameContent';

type Props = {
    isActive: boolean 
}

const Game = ({ isActive }: Props) => {
  return (
    <ContentWrapper isActive={isActive}>
      <GameHeader/>
      <GameContent/>
    </ContentWrapper>
  )
}

export default Game