import React from "react";
import styles from "./Aop.module.css";
import cardimg1 from "../../assets/cardimg1.jpg";
import cardimg2 from "../../assets/cardimg2.jpg";
import cardimg3 from "../../assets/cardimg3.jpg";
import cardimg4 from "../../assets/cardimg4.jpg";
import cardimg5 from "../../assets/cardimg5.jpg";
import cardimg6 from "../../assets/cardimg6.jpg";

const Aop = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Area of Practices</div>
      <div className={styles.cardDiv}>
        <div className={styles.subWrapper}>
          <div className={styles.card1}>
            <img className={styles.cardImage} src={cardimg1} alt="" />
            <div className={styles.imageText}>BUSINESS LAW</div>
          </div>
          <div className={styles.card2}>
            <img className={styles.cardImage} src={cardimg2} alt="" />
            <div className={styles.imageText}>Partnership LAW</div>
          </div>
        </div>

        <div className={styles.subWrapper}>
        <div className={styles.card2} style={{marginRight: "30px"}}>
            <img className={styles.cardImage} src={cardimg3} alt="" />
            <div className={styles.imageText}>REAL ESTATE LAW</div>
          </div>
          <div className={styles.card1} style={{marginRight: "0px"}}>
            <img className={styles.cardImage} src={cardimg4} alt="" />
            <div className={styles.imageText}>BUSINESS LAW</div>
          </div>
          
        </div>

        <div className={styles.subWrapper}>
          <div className={styles.card1}>
            <img className={styles.cardImage} src={cardimg5} alt="" />
            <div className={styles.imageText}>LANDLORD DISPUTES</div>
          </div>
          <div className={styles.card2}>
            <img className={styles.cardImage} src={cardimg6} alt="" />
            <div className={styles.imageText}>ELDER ABUSE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aop;
