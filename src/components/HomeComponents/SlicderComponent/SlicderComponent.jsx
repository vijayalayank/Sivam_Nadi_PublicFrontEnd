import styles from "./SlicderComponent.module.css";
import { useState } from "react";

const content = [
  {
    image: "./public/imageFolder/Home/LeftImage1.png",
    description:
      "Nadi astrology is specifically designed to guide individuals in pooja and pariharam."
  },
  {
    image: "./public/imageFolder/Home/LeftImage2.jpeg",
    description:
      "Yes, Nadi astrology predicts past, present, and future using ancient palm-leaf manuscripts."
  },
  {
    image: "./public/imageFolder/Home/LeftImage3.png",
    description:
      "According to belief, Nadi Astrology predicts your future based on karmic records."
  },
  {
    image: "./public/imageFolder/Home/LeftImage4.jpeg",
    description:
      "Nadi helps you understand karma and makes your future favorable."
  }
];

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

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

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <button className={styles.arrow} onClick={prevSlide}>
          ❮
        </button>

        <div className={`${styles.imageWrapper} ${fade ? styles.fadeIn : styles.fadeOut}`}>
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
          src="./public/imageFolder/Home/rightImage1.png"
          alt="Astrologer"
          className={styles.sideImage}
        />

        <div className={styles.buttonContainer}>
          <a href="tel:8838771582">
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