import { useState } from 'react'
import { MemeGrid, MemeImage } from './styles'
import MemeData from '../../MemeData'

function getRandomItem (arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length)

  // get random item
  const item = arr[randomIndex]

  return item
}

function Meme () {
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [memeImg, setMemeImg] = useState(getRandomItem(MemeData.data.memes).url)

  function handleTopChange (e) {
    setTopText(e.target.value)
  }
  function handleBottomChange (e) {
    setBottomText(e.target.value)
  }

  function handleClick (e) {
    const meme = getRandomItem(MemeData.data.memes)
    setMemeImg(meme.url)
  }

  return (
    <MemeGrid>
      <div className='form'>
        <input onChange={handleTopChange} placeholder='Texto Superior' />
        <input onChange={handleBottomChange} placeholder='Texto Inferior' />
        <button onClick={handleClick}>Get a new meme image 🖼️</button>
      </div>
      <MemeImage src={memeImg} />
    </MemeGrid>
  )
}

export default Meme
