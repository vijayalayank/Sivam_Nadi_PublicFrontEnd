import styles from "./SlicderComponent.module.css";
import { useState, useEffect, useRef } from "react";
import {content} from "../../../LocalContent/Home"


const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  /* ---------- Auto Slide Every 3 Seconds ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const changeSlide = (newIndex) => {
    setFade(false);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 200);
  };

  const nextSlide = () => {
    changeSlide((currentIndex + 1) % content.length);
  };

  const prevSlide = () => {
    changeSlide(
      currentIndex === 0 ? content.length - 1 : currentIndex - 1
    );
  };

  /* ---------- Swipe Support ---------- */
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.leftSection}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className={styles.arrow} onClick={prevSlide}>
          ❮
        </button>

        <div
          className={`${styles.imageWrapper} ${
            fade ? styles.fadeIn : styles.fadeOut
          }`}
        >
          <img
            src={content[currentIndex].image}
            alt="Nadi Astrology"
            className={styles.mainImage}
          />
          <p className={styles.description}>
            {content[currentIndex].description}
          </p>
        </div>

        <button className={styles.arrow} onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className={styles.rightSection}>
        <img
          src="/ImageFolder/Home/rightImage1.png"
          alt="Astrologer"
          className={styles.sideImage}
        />

        <div className={styles.buttonContainer}>
          <a href="tel:9566381222">
            <button className={styles.callBtn}>Call Us</button>
          </a>

          <a href="/appointment_form">
            <button className={styles.appointBtn}>Appointment</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;