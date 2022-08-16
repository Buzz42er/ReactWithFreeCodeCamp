import React from 'react'

const PhotoShuffle = () => {
    const shuffle = () => {
        console.log('i was clicked!')
    }

  return (
    <div className='PhotoShuffle'>
      <img src={require('./photos/pexels-amber-janssens-7327624.jpg')} alt="" className="photoShuffle" />
      <button className='shuffleButton' onClick={shuffle}>Shuffle</button>
    </div>
  )
}

export default PhotoShuffle
