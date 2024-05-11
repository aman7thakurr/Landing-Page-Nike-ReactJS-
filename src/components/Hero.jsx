import React from 'react'
import Navbar from './Navbar'
import styles from "./Hero.module.css"
import shoe from "../assets/images/shoe_image.png"
import amazon from "../assets/images/amazon.png"
import flipkart from "../assets/images/flipkart.png"
const Hero = () => {
  return (
    <>
     <Navbar/>
     <div className={styles.hero}>
        <div className={styles.frame1}>
            <p className={styles.p1}>YOUR FEET DESERVE THE BEST</p>
            <p className={styles.p2}>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className={styles.btnd}>
            <button className={styles.btn}>Shop Now</button>
            <button className={styles.btn2}>Category</button></div>
            <div>
                <p className={styles.p3}>Also Available On</p>
                <img src={flipkart} alt=""  className={styles.fk}/>
                <img src={amazon} alt="" className={styles.amazon}/>
            </div>
        </div>
        <div className={styles.img}>
            <img src={shoe} alt="" />
        </div>
     </div>
    </>
  )
}

export default Hero
