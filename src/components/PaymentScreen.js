import React from "react";
import Title from "./Title";
import styles from "./PaymentScreen.module.css";
import applePay from "../images/apple-pay.png";
import gPay from "../images/google-pay.png";
import unicorn_dust from "../images/unicorn_dust.svg";
import sky_shaped from "../images/sky_shaped.svg";

const PaymentScreen = ({ setScreen }) => (
  <div className={styles.paymentScreenContainer}>
    <Title><h1 className={styles.paymentScreenTitle}>
      <span className={styles.paymentScreenTitleSmall}>You can</span>
      <span className={styles.paymentScreenTitleMiddle}>PAY US</span>NOW</h1></Title>
    <button onClick={() => setScreen('preparation')} className={styles.payButtonGpay}><img src={applePay}/></button>
    <button onClick={() => setScreen('preparation')} className={styles.payButtonApple}><img src={gPay}/></button>
    <div className={styles.donutContentWrapper}>
            <img className={styles.sky_shaped} src={sky_shaped}/>
            <img className={styles.unicornDonut} src={unicorn_dust}/>
        </div>
  </div>
);

export default PaymentScreen;