import React from "react";
import styles from "./Chapters.module.css";

import Chapter from "../../Components/Chapter/Chapter";
import ImageHeroSection from "../../components/Shared/ImageHeroSection/ImageHeroSection";

function Chapters() {
  return (
    <div className={styles.page}>

      <ImageHeroSection
        image="/assert/images/chapters/chapterHeroImage.png"
      />

      <section className={styles.chapterSection}>
        
        <div className={styles.container}>
          
          <h2 className={styles.heading}>
            Our Sacred Chapters
          </h2>

          <div className={styles.divider}></div>

          <p className={styles.description}>
            Explore the 12 sacred chapters of Sivanadi Jothidam that reveal life,
            destiny, relationships, wealth, and spiritual liberation.
          </p>

          <div className={styles.gridWrapper}>
            <Chapter />
          </div>

        </div>

      </section>

    </div>
  );
}

export default Chapters;