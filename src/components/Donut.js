import React from "react";
import styles from "./MenuScreen.module.css";
import {motion} from "framer-motion/dist/framer-motion";


const Donut = ({ type, image}) => {

return(
  <div className={styles.donutItem}>
    <motion.p className={styles.donutItemTitle}
    animate={{
      x: [-100, 110, 0],
      opacity: 1,
      scale: 1
    }}
    initial={{ opacity: 0}}
    transition={{
        duration: 1.8,
        ease: [0.5, 0.5, 0.5, 0.5],
    }}>{type}</motion.p>
    <div className={styles.donutImageWrapper}>
      <motion.img 
       animate={{
        x: [100, 0],
        rotate:-360,
        opacity: 1,
        scale: 1
      }}
      transition={{
          duration: 1.8,
          ease: [0.5, 0.5, 0.5, 0.5],
      }}
      whileHover={{ rotate: 360  }}
      src={image} alt={type}/>
    </div>
  </div>
)
};

export default Donut;