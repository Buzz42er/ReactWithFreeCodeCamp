import React from 'react'

const MemeMain = () => {
  return (
    <div className='MemeMain'>
      <form className='formMeme' action="">
        <div className="textInput">
        <input type="text" id='upperText' placeholder='Here write upper text'/>
        <input type="text" id='lowerText' placeholder='Here write lower text'/>
        </div>
        <button id='submitButton'>Get a new meme image 🖼</button> 
      </form>
      <img className='meme' src="" alt="meme" />
    </div>
  )
}

export default MemeMain
