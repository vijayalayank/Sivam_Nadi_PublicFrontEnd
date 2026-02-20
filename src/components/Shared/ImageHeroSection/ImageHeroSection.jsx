import styles from "./ImageHeroSection.module.css";

function ImageHeroSection({ image, title, subtitle }) {
  return (
    <section className={styles.hero}>

      {/* Background Image */}
      <img src={image} alt={title} className={styles.background} />

      {/* Dark Overlay */}
      {title && <div className={styles.overlay}></div> }
     

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

    </section>
  );
}

export default ImageHeroSection;