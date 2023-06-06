import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "./Button.scss"
function Button({text}) {
  const [rotate, setRotate] = useState(false)
  return (
    <motion.div
     className='button'
     animate={{rotate: rotate ? 360 : 0}}
     transition={{type:'tweee', duration: .9}}
     onClick={ () =>{
      setRotate(!rotate)
    }}>
        <button>{text}</button>
    </motion.div>
  )
}

export default Button