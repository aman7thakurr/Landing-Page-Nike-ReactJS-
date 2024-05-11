import React, { useState, useEffect } from 'react';
import brandLogo from '../assets/images/brand_logo.png';
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showBurger, setShowBurger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowBurger(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.nav}>
      {/* Burger icon */}
      {showBurger && (
        <React.Fragment>
          <input type="checkbox" id="burger-toggle" className={styles.checkbox} />
          <label htmlFor="burger-toggle" className={styles.burger}>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </React.Fragment>
      )}
      <div className={styles.imgd}>
        <img src={brandLogo} alt="Brand Logo" className={styles.img} />
      </div>
      <div className={styles.navd}>
        <ul className={styles.li}>
          <li><a href="#" className={styles.a}>Menu</a></li>
          <li><a href="#" className={styles.a}>Location</a></li>
          <li><a href="#" className={styles.a}>About</a></li>
          <li><a href="#" className={styles.a}>Contact</a></li>
        </ul>
      </div>
      <div className={styles.btnd}>
        <button className={styles.btn}>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
