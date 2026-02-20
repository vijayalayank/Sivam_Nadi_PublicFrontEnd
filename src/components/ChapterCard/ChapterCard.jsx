import styles from "./ChapterCard.module.css";

function ChapterCard({ image, title, description }) {
  return (
    <div className={styles.card}>

      {/* Circle Image */}
      <div className={styles.circle}>
        <img src={image} alt={title} />
      </div>

      {/* Card Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>
          {description}
        </p>
      </div>

    </div>
  );
}

export default ChapterCard;
