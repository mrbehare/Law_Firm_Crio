import React from "react";
import { useState } from "react";
import danial from "../../assets/Danial.png";
import Sanfole from "../../assets/Sanfole.png";
import Cesforila from "../../assets/Cesforila.png";
import Nikjeo from "../../assets/Nikjeo.png";
import Colleen from "../../assets/Colleen.png";
import Haldone from "../../assets/Haldone.png";
import styles from "./Ourteam.module.css"

const Ourteam = () => {
  const data = [
    {
      imageUrl: danial,
      title: "Danial Def",
      Content: "301 Cases",
    },
    {
      imageUrl: Sanfole,
      title: "Sanfole",
      Content: "850 Cases",
    },
    {
      imageUrl: Cesforila,
      title: "Cesforila",
      Content: "470 Cases",
    },
    {
      imageUrl: Colleen,
      title: "Colleen",
      Content: "180 Cases",
    },
    {
      imageUrl: Haldone,
      title: "Holleen",
      Content: "312 Cases",
    },
    {
      imageUrl: Nikjeo,
      title: "Nik Jeo",
      Content: "250 Cases",
    },
  ];

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };



  return (
    <div className={styles.wrapper}> 
      <div className={styles.teamText}>Our Team</div>
      <div className={styles.teamCard}>
        {data.map((data,index) => (
          <div   className={`${styles.card} ${index===selectedCardIndex ? styles.selectedCard : ""}`} onClick={()=>handleCardClick(index)}>
            <div><img src={data.imageUrl} alt="" /></div>
            <div className={styles.innerDiv}>
            <h2>{data.title}</h2>
            <p>{data.Content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
