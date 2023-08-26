import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as Xlogo } from "../../assets/xlogo.svg";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Xlogo />
      </div>

      <div className={styles.content}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
        </div>
 
      <div className={styles.contact}>
        <button >Contact Now</button>
      </div>
    </div>
  );
};

export default Navbar;
