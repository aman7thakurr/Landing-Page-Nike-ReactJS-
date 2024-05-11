import React from 'react';
import brandLogo from '../assets/images/brand_logo.png';
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
     <div className={styles.imgd}> <img src={brandLogo} alt="Brand Logo" className={styles.img} /></div>
     <div className={styles.navd}>
      <ul className={styles.li}>
        <li ><a href="#" className={styles.a}>Menu</a></li>
        <li  ><a href="#" className={styles.a}>Location</a></li>
        <li  ><a href="#" className={styles.a}>About</a></li>
        <li  ><a href="#" className={styles.a}>Contact</a></li>
      </ul></div>
      <div className={styles.btnd}><button className={styles.btn}>Login</button></div>
    </div>
  );
}

export default Navbar;
