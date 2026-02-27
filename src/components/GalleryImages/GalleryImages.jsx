import Masonry from "react-masonry-css";
import styles from "./GalleryImages.module.css";
import { useState } from "react";
function GalleryImages({ images, refreshGallery }) {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const breakpointColumns = {
    default: 4,
    1200: 3,
    768: 2,
    500: 1,
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };




  return (
    <div className={styles.gal}>
      {/* Upload section */}

      {/* Masonry gallery */}
      <Masonry
        breakpointCols={breakpointColumns}
        className={styles.masonryGrid}
        columnClassName={styles.masonryColumn}
      >
        {images.map((img) => (
          <div key={img.id} className={styles.imageCard}>
            {/* ⭐ Delete button */}
            <img
              src={`https://api.sivamnadiastrology.com/api/gallery/${img.id}`}
              alt={`gallery-${img.id}`}
              loading="lazy"
              crossOrigin="anonymous"
              onError={(e) => (e.target.src = "/fallback.jpg")}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}



export default GalleryImages;