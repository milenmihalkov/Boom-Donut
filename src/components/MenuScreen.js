import React from "react";
import Title from "./Title";
import Donut from "./Donut";
import styles from "./MenuScreen.module.css";
import unicorn_dust from "../images/unicorn_dust.svg";
import true_blood from "../images/true_blood.svg";
import marble_magic from "../images/marble_magic.svg";
import sky_shaped from "../images/sky_shaped.svg";
import { useEffect } from "react";


const MenuScreen = ({ setScreen }) => {

  const handleDonutClick = (type) => {
    console.log(type);
    localStorage.setItem("selectedDonut", type);
    setScreen("payment");
  };

  return (
<div className={styles.menuScreeContainer}>
    <Title><h1 className={styles.menuTitle}><span className={styles.menuTitleSmall}>THE</span>MENU</h1></Title>
    <div className={styles.donutList}>
      <div onClick={() => handleDonutClick(sky_shaped)}>
        <Donut type="SKY SHAPED" image={sky_shaped} />
      </div>
      <div onClick={() => handleDonutClick(marble_magic)}>
        <Donut type="MARBLE MAGIC" image={marble_magic} />
      </div>
      <div onClick={() => handleDonutClick(true_blood)}> 
        <Donut type="TRUE BLOOD" image={true_blood} />
      </div>
      <div onClick={() => handleDonutClick(unicorn_dust)}>
        <Donut type="UNICORN DUSTT" image={unicorn_dust} />
      </div>      
      
    </div>
  </div>
  )
  
  };

export default MenuScreen;

