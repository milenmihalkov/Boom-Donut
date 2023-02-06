import React from "react";
import Title from "./Title";
import styles from "./PaymentScreen.module.css";
import applePay from "../images/apple-pay.png";
import gPay from "../images/google-pay.png";
import unicorn_dust from "../images/unicorn_dust.svg";
import sky_shaped from "../images/sky_shaped.svg";
import {motion} from "framer-motion/dist/framer-motion";

const PaymentScreen = ({ setScreen }) => (
  <div className={styles.paymentScreenContainer}>
    <Title><h1 className={styles.paymentScreenTitle}>
      <span className={styles.paymentScreenTitleSmall}>You can</span>
      <span className={styles.paymentScreenTitleMiddle}>PAY US</span>NOW</h1></Title>
    <button onClick={() => setScreen('preparation')} className={styles.payButtonGpay}><img src={applePay} alt="Apple Pay"/></button>
    <button onClick={() => setScreen('preparation')} className={styles.payButtonApple}><img src={gPay} alt="G-Pay"/></button>
    <div className={styles.donutContentWrapper}>
            <motion.img className={styles.sky_shaped} src={sky_shaped}
            animate={{
              y: [50,0],
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
            whileHover={{ rotate: 20 }} alt="donut-item"/>
            <motion.img className={styles.unicornDonut} src={unicorn_dust}
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
            whileHover={{ rotate: 20 }} alt="donut-item"/>
        </div>
  </div>
);

export default PaymentScreen;