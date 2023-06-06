import React from 'react'
// import "/.../../styles/styles.module.scss"
import "./Hero.scss"
import Button from "../Button/Button"
import  Rating  from '../Rating/Rating'
const Hero = () => {
  return (
    <div className='contain' >
   <div className='left'>
    <h1> Learn and Connect
        with the like minded, the
        fast, fun and effective way to grow
    </h1>
    <p>
    We're so confident that you'll love our chat app that we offer a 100% satisfaction guarantee. If you're not happy with our app for any reason, simply contact us and we'll look into your mail.   
    </p>
    <div className='btn-section'>
      <Button text="Register" className="x-btn"/>
      <button className='learn-section' style={{cursor: "pointer"}}>
        <img src='/images/play-button.svg' alt="image" />
        <b>Learn More</b>   
      </button>
    </div>
    {/* <div className='rating'> */}
    <Rating />

    {/* </div> */}
    </div>


    
    <div className='right'>
    <img src='/images/girl-holding-phone.png' />
 
    <img src='/images/Elipsis-purple.svg' className='e-purple' />
    <img src='/images/Elipsis-white.svg' className='e-white' />
    </div>

    
    </div>
  )
}

export default Hero