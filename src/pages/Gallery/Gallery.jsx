import ImageHeroSection from "../../components/Shared/ImageHeroSection/ImageHeroSection";
import GalleryImages from "../../components/GalleryImages/GalleryImages";

import galleryData from "../../data/galleryData";

import styles from "./Gallery.module.css"

function Gallary() {

  return (
    <div>

   
<ImageHeroSection
        image="../../public/assert/images/gallery/GalleryHeroImage.png"
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


      <GalleryImages images={galleryData} />

    </div>
  );
}

export default Gallary;