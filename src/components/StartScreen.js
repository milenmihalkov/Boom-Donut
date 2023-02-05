import React from "react";
import Title from "./Title";
import styles from "./StartScreen.module.css";
import unicorn_dust from "../images/unicorn_dust.svg";
import true_blood from "../images/true_blood.svg";
import sparkles from "../images/sparkles.svg";

const StartScreen = ({ setScreen }) => (
    <div className={styles.startScreenContainer}>
        <div className={styles.donutContentWrapper}>
            <img className={styles.sparkles} src={sparkles} alt="sparkles"/>
            <img className={styles.unicornDonut} src={unicorn_dust} alt="unicorn-dust"/>
            <img className={styles.trueBloodDonut} src={true_blood} alt="true-blood"/>
        </div>
        <div className={styles.contentWrapper}>
            <Title><h1 className={styles.startScreenTitle}><span className={styles.smallTitle}>THE</span>DONUT<br/>SHOP</h1></Title> 
            <button onClick={() => setScreen('menu')}>Start</button>
        </div>
      
    </div>
  );

  export default StartScreen;