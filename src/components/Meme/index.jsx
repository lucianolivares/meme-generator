import { useEffect, useState } from 'react'
import { MemeContainer, MemeGrid, MemeImage } from './styles'

function Meme () {
  const [memeArray, setMemeArray] = useState([])
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    imgSrc: 'http://i.imgflip.com/1bij.jpg'
  })

  useEffect(() => {
    async function getMeme () {
      const res = await fetch('https://api.imgflip.com/get_memes')
      const data = await res.json()
      setMemeArray(data.data.memes)
    }
    getMeme()
  }, [])

  function getMemeImage () {
    const randomIndex = Math.floor(Math.random() * memeArray.length)
    const { url } = memeArray[randomIndex]
    setMeme(prevObj => {
      return {
        ...prevObj,
        imgSrc: url
      }
    })
  }

  function handleChange (event) {
    const { name, value } = event.target
    setMeme(prevObj => {
      return {
        ...prevObj,
        [name]: value
      }
    })
  }

  return (
    <MemeGrid>
      <div className='form'>
        <input
          name='topText'
          value={meme.topText}
          onChange={handleChange}
          placeholder='Texto Superior'
        />
        <input
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
          placeholder='Texto Inferior'
        />
        <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
      </div>
      <MemeContainer>
        <MemeImage src={meme.imgSrc} />
        <h4 className='top'>{meme.topText}</h4>
        <h4 className='bottom'>{meme.bottomText}</h4>
      </MemeContainer>
    </MemeGrid>
  )
}

export default Meme
