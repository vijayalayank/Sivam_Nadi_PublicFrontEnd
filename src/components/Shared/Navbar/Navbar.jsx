import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>

      {/* TOP SECTION */}
      <div className={styles.topBar}>
        
        {/* Logo */}
        <div className={styles.logoSection}>
          <img
            src="./public/imageFolder/Home/Logo.png"
            alt="Logo"
            className={styles.logo}
          />
        </div>

        {/* Appointment Button */}
        <button className={styles.appointmentBtn}>
          Appointment
        </button>

        <div className={styles.contactText}>
            <img src="./public/ImageFolder/Home/Phone_Logo.png" alt="" />
            <p>+91 9999999999</p>
            {/* <p>9999999999</p> */}
        </div>

        <div className={styles.contactText}>
            <img src="./public/ImageFolder/Home/whatsapp.png" alt="" />
            <p>+91 9999999999</p>
            {/* <p>9999999999</p> */}
        </div>
        {/* Contact + Language */}
        <div className={styles.rightSection}>

          <select className={styles.languageSelect}>
            <option>Select Language</option>
            <option>English</option>
            <option>Tamil</option>
            <option>Hindi</option>
          </select>
        </div>

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
        <a href="#">Pooja Remedies</a>
        <a href="/Gallery">Gallery</a>
        <a href="/visit_us">Visit Us</a>
      </div>

    </nav>
  );
};

export default Navbar;