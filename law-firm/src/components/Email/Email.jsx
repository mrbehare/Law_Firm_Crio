import React from 'react'
import styles from "./Email.module.css"

const Email = () => {
  return (
    <div className={styles.wrapper}> 
     <input    className={styles.input} placeholder="Enter your Email address" type='text' />
     <button className={styles.button}>Let's Talk</button>
    </div>
  )
}

export default Email
