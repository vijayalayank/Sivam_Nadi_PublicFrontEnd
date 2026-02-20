import ChapterCard from "../ChapterCard/ChapterCard"
import styles from "./Chapter.module.css";
import { chaptersData } from "../../data/chapters";

function Chapter() {



  return (
    <div className={styles.grid}>
      {chaptersData.map((chapter, index) => (
        <ChapterCard
          key={index}
          image={chapter.image}
          title={chapter.title}
          description={chapter.description}
        />
      ))}
    </div>
  );
}

export default Chapter;
