import React from 'react'
import lit from './Welcome.module.scss'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'

import Features from '../../components/Features/Features'
import Market from '../../components/Market/Market'
// import DarkMode from '../../components/Darkmode/DarkMode/DarkMode'
const Welcome = () => {
  const styles =  {
    position:  "absolute",
    
  }
  return (
    <div className={lit.container}>
      <div className={lit.width}>
        <Navbar  className={lit.sticky}/>
        <Hero className=""/>
        <Features />
        <Market />
      </div>
    </div>
  )
}

export default Welcome