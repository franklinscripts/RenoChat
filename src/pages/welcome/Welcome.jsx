import React from 'react'
import styles from './Welcome.module.scss'
const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.container}>
          <h1>RenoChat</h1>
          <div className={["div-style", styles.mid].join(' ')}>
            <b>Learn and <span>Connect</span> with like minded.</b>
            <hr />
            <p>The Fast, Fun and effective way to Grow.</p>
          </div>
          <div className={styles.btns}>
            <button>Get Started</button>
            <button>Already a Member?</button>
          </div>
      </div>
    </div>
  )
}

export default Welcome