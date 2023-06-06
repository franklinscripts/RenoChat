import React from 'react'
import "./Rating.scss"
const Rating = () => {
  return (
    <div className='rating-container'>
        <div className='image-stack'>
        <div className='p'>
           <img src='/images/frame-0.svg' alt='img'/>
          <img src='/images/frame-1.svg' className="ml-2" alt='img'/>
          <img src='/images/frame-2.svg' className="ml-1" alt='img'/>
    
        </div>
             </div>
        <div className='rate'>
            <h4>400K</h4>
            <span>Active Users</span>
        </div>
        <div className='rate'>
          <h4>4.8/5</h4>
            <span>Rating</span>
        </div>
    </div>


  )
}

export default Rating