import React from 'react'
import Navbar from '../NavBar/Navbar'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.navbarWrapper}>  <Navbar islogo={false}/></div>
    
      <div className={styles.innerWrapper}>
        <p>© 2020 Acme. All rig</p>
        <p> Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  )
}

export default Footer
