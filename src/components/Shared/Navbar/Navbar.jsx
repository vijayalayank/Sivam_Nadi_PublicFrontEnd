import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    
    <nav className={styles.navbar}>

      {/* TOP SECTION */}
      <div className={styles.topBar}>
        
        {/* Logo */}
        <a href="/">
          <div className={styles.logoSection}>
            <img
              src="/ImageFolder/Home/Logo.jpeg"
              alt="Logo"
              className={styles.logo}
            />
          </div>
        </a>

        {/* Appointment Button */}
        <a href="/appointment_form">
          <button className={styles.appointmentBtn} >
            Appointment
          </button>
        </a>

        <a href="tel:9566381222">

          <div className={styles.contactText}>
              <img src="/ImageFolder/Home/Phone_Logo.png" alt="" />
              <p>+91 9566381222</p>
          </div>
        </a>

        <a href="https://api.whatsapp.com/send?phone=9566381222&text=Naadi_Astrology">

          <div className={styles.contactText}>
              <img src="/ImageFolder/Home/whatsapp.png" alt="" />
              <p>+91 9566381222</p>
          </div>
        </a>
        {/* Contact + Language */}
        

        {/* Hamburger */}
        <div 
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className={`${styles.menuBar} ${menuOpen ? styles.active : ""}`}>
        <a href="/">Home</a>
        <a href="/about_us">About Nadi Astro</a>
        <a href="/Chapters">Chapter List</a>
        <a href="/payment">Payment</a>
        <a href="/pooja-remedy">Pooja Remedies</a>
        <a href="/Gallery">Gallery</a>
        <a href="/visit_us">Visit Us</a>
      </div>

    </nav>

    <div className={styles.forMobile}>
      <a href="/appointment_form">
          <button className={styles.appointmentBtn1} >
            Appointment
          </button>
        </a>
        
        {/* <div className={styles.line}></div> */}

        <a href="tel:8838771582">

          <div className={styles.contactText1}>
              <img src="/ImageFolder/Home/Phone_Logo.png" alt="" />
              <p>+91 9999999999</p>
          </div>
        </a>

        {/* <div className={styles.line}></div> */}

        <a href="https://api.whatsapp.com/send?phone=917598004142&text=Naadi_Astrology">

          <div className={styles.contactText1}>
              <img src="/ImageFolder/Home/whatsapp.png" alt="" />
              <p>+91 9999999999</p>
          </div>
        </a>

        {/* <div className={styles.line}></div> */}
    </div>
    </>
  );
};

export default Navbar;