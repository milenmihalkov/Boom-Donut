import React from "react";
import Title from "./Title";
import { useEffect } from "react";
import styles from "./PreparationScreen.module.css";
import {motion} from "framer-motion/dist/framer-motion";

const PreparationScreen = ({ setScreen }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => setScreen('ready'), 5000);
    return () => clearTimeout(timeoutId);
  });

  return (
    <div className={styles.preparingScreenContainer}>
      <div className={styles.preparingScreenImageWrapper}>
      
        <motion.img 
          animate={{
          rotate: 360 
        }}
        transition={{
          duration: 5,
          delay: 0.1,
          ease: [0.5, 0.70, 0.5, 0.5],
      }}
        className={styles.preparedDonut} 
        src={localStorage.getItem('selectedDonut')} alt="donut"/>
        
      </div>
        <Title><h1>Preparing...</h1></Title>
     
    </div>
  );
};

export default PreparationScreen;