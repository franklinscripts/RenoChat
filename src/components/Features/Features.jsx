import React from 'react'
import "./Features.scss"
import features from '../../data/data'
const Features = () => {
  return (

   
  
    <div className='features-container'>
    <h1>Features for a better experience</h1>
    <div className='features-head'>
        {
            features.map((feature, index) => {
                return (
                    <div className='feature-container'>

                    <div className='feature-head' key={index}>
                        <img className='' src={feature.image} />
                        <h4>{feature.title}</h4>
                    </div>
                    <div className='feature-body'>
                        <p>{feature.description}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </div>

  )
}

export default Features