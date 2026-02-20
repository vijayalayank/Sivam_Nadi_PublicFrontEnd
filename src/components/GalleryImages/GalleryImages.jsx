import Masonry from "react-masonry-css";
import styles from "./GalleryImages.module.css";

function GalleryImages({ images }) {

  const breakpointColumns = {
    default: 4,
    1200: 3,
    768: 2,
    500: 1
  };

  return (
    <div className={styles.gal}>
    <Masonry
      breakpointCols={breakpointColumns}
      className={styles.masonryGrid}
      columnClassName={styles.masonryColumn}
    >
      {images.map((img, index) => (
        <div key={index} className={styles.imageCard}>
          <img src={img.url} alt="" />
        </div>
      ))}
    </Masonry>
    </div>
  );
}

export default GalleryImages;