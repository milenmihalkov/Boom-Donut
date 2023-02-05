import React from "react";
import Title from "./Title";
import styles from "./StartScreen.module.css";
import unicorn_dust from "../images/unicorn_dust.svg";
import true_blood from "../images/true_blood.svg";
import sparkles from "../images/sparkles.svg";
import {motion} from "framer-motion/dist/framer-motion";

const StartScreen = ({ setScreen }) => (
    <div className={styles.startScreenContainer}>
        <div className={styles.donutContentWrapper}>
            <img className={styles.sparkles} src={sparkles} alt="sparkles"/>
            <motion.img className={styles.unicornDonut} src={unicorn_dust} alt="unicorn-dust"
            animate={{
                y: [-50,0],
                x: [-50,0],
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.5, 0.5, 0.5, 0.5]
              }}
              initial={{ opacity: 0, }}
              whileHover={{ rotate: 20 }}/>
            <motion.img className={styles.trueBloodDonut} src={true_blood} alt="true-blood"
            animate={{
                x: [50, 0],
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.5, 0.5, 0.5, 0.5]
              }}
              initial={{ opacity: 0 }}
              whileHover={{ rotate: 20 }}/>
        </div>
        <div className={styles.contentWrapper}>
            <Title><h1 className={styles.startScreenTitle}><span className={styles.smallTitle}>THE</span>DONUT<br/>SHOP</h1></Title> 
            <button onClick={() => setScreen('menu')}>Start</button>
        </div>
      
    </div>
  );

  export default StartScreen;