import ImageHeroSection from "../../components/Shared/ImageHeroSection/ImageHeroSection";
import GalleryImages from "../../components/GalleryImages/GalleryImages";
import { useState,useEffect } from "react";
import styles from "./Gallery.module.css"
import axios from "axios";

function Gallary() {

  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const res = await axios.get(`http://69.169.109.129:5000/api/gallery`);
    setImages(res.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>

   
<ImageHeroSection
        image="../../public/assert/images/Gallery/galleryHeroImage.png"
        title="Gallery"
        subtitle="Sacred moments and spiritual experiences"
/>

<h2 className={styles.heading}>
            Our Sacred Gallery
          </h2>

          <div className={styles.divider}></div>

          <p className={styles.description}>
            Explore the 12 sacred chapters of Sivanadi Jothidam that reveal life,
            destiny, relationships, wealth, and spiritual liberation.
          </p>


          <GalleryImages images={images} refreshGallery={fetchImages} />

    </div>
  );
}

export default Gallary;