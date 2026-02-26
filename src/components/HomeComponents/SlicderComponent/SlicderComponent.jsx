import styles from "./SlicderComponent.module.css";
import { useState } from "react";

const content = [{
    image: "./public/imageFolder/Home/LeftImage1.png",
    description: "Nadi astrology is specifically designed to guide individuals in pooja and pariharam."
  },
  {
    image: "./public/imageFolder/Home/LeftImage2.jpeg",
    description: "Yes, Nadi astrology is believed to predict the current life in detail, including past, present, and future, based on ancient palm-leaf manuscripts."
  },
  {
    image: "./public/imageFolder/Home/LeftImage3.png",
    description: "Yes, according to ancient belief, Nadi Astrology can predict your future based on karmic records written by sages."
  },
  {
    image: "./public/imageFolder/Home/LeftImage4.jpeg",
    description: " Nadi helps you understand your Karma, remove your sins, & makes your future favorable to you."
  }
];


const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? content.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.container}>

      {/* LEFT SIDE */}
      <div className={styles.leftSection}>
        <button className={styles.arrow} onClick={prevSlide}>❮</button>

        <div className={styles.imageWrapper}>
          <img
            src={content[currentIndex].image}
            alt="Nadi Astrology"
            className={styles.mainImage}
          />
          <p className={styles.description}>
            {content[currentIndex].description}
          </p>
        </div>

        <button className={styles.arrow} onClick={nextSlide}>❯</button>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.rightSection}>
        <img
          src="./public/imageFolder/Home/rightImage1.png"
          alt="Astrologer"
          className={styles.sideImage}
        />

        <div className={styles.buttonContainer}>
          <button className={styles.callBtn}>Call Us</button>
          <button className={styles.appointBtn}>Appointment</button>
        </div>
      </div>

    </div>
  );
};

export default HomeSection;