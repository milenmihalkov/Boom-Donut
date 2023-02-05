import React from "react";
import Title from "./Title";
import styles from "./ReadyScreen.module.css";

const ReadyScreen = ({ setScreen }) => (
  <div className={styles.readyScreenContainer}>
    <div className={styles.readyScreenContentContainer}>
      <div className={styles.readyScreenImageContainer}>
        <img src={localStorage.getItem('selectedDonut')}/>
      </div>
    </div>
    <div className={styles.readyScreenTitleContainer}>
      <Title><h1>You can now come <br/>and pick up <br/>your amazing Donut!</h1></Title>
    </div>
    <div className={styles.readyScreenButtonContainer}>
      <button onClick={() => {
        localStorage.clear()
        setScreen('start')
        }}>Done</button>
    </div>
  </div>
);


export default ReadyScreen;