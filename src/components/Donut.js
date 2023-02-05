import React from "react";
import styles from "./MenuScreen.module.css";
import {motion} from "framer-motion/dist/framer-motion";


const Donut = ({ type, image}) => {

return(
  <div className={styles.donutItem}>
    <p className={styles.donutItemTitle}>{type}</p>
    <div className={styles.donutImageWrapper}>
      <motion.img 
      transition={{
          duration: 2,
          ease: [0.5, 0.71, 0.5, 0.5],
      }}
      whileHover={{ rotate: 360  }}
      src={image} alt={type}/>
    </div>
  </div>
)
};

export default Donut;