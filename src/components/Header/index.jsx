import { HeaderContainer } from './styles'
import trollFace from '../../images/troll-face.png'

function Header () {
  return (
    <HeaderContainer>
      <img src={trollFace} />
      <h1>Meme Generator</h1>
    </HeaderContainer>
  )
}

export default Header
