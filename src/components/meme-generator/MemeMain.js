import React from 'react'
import memesData from "./memesData.js"
// import Meme from './imagesMeme/Meme.js'

const MemeMain = () => {
  // const handleOnClick = () => {
  //   console.log(memesData.data.memes.url)
  // }
  // const memeImg = memesData.map(meme => {
  //   return (<Meme 
  //                 key={meme.id}
  //                 url={meme.url}
  //   />)
  // })
  
  const random = () => {
      const i = (max) => {
      return Math.floor(Math.random() * max);
    }  
    const memeArrayURL = memesData.data.memes[i(100)].url
    console.log(memeArrayURL)

    
  }
  // const srcImg = memesData.data.memes[random].url
 
  return (
    <div className='MemeMain'>
      <div className='formMeme'>
        <div className="textInput">
        <input type="text" id='upperText' placeholder='Here write upper text'/>
        <input type="text" id='lowerText' placeholder='Here write lower text'/>
        </div>
        <button id='submitButton' onClick={random} >Get a new meme image 🖼</button> {/** */}
      </div>
      {/* {memeImg} */}
       <img className='meme'  alt="meme" /> {/*src={srcImg} */}
    </div>
  )
}

export default MemeMain
