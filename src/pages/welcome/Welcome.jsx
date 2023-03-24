import React from 'react'
import './Welcome.scss'
const Welcome = () => {
  return (
    <div className='welcome'>
      <div className="container">
        
          <h1>RenoChats</h1>
          <div className="mid div-style">
           <b> Learn and <span>Connect</span> with like minded.</b>
            <hr />
            <p>The Fast, Fun and effective way to Grow.</p>

          </div>
          <div className="btns">
            <button>Get Started</button>
            <button>Already a Member?</button>
          </div>
      </div>
    </div>
  )
}

export default Welcome