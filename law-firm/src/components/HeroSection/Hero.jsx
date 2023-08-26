import React from 'react'
import styles from "./Hero.module.css";
import { ReactComponent as Heroimg } from "../../assets/Heroimg.svg"
import Email from '../Email/Email';

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroText}>
       <h2>You don't have to Fight Alone</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae..</p>
       <Email/>
      </div>
      <div > 
      <Heroimg/>
      </div>
    </div>
  )
}

export default Hero
