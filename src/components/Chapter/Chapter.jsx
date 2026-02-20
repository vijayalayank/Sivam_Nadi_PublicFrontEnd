import ChapterCard from "../ChapterCard/ChapterCard"
import styles from "./Chapters.module.css";


function Chapter() {

  const chapters = [
    {
      title: "Chapter 1",
      description: "Introduction to Sivanadi",
      image: img1
    },
    // total 12 chapters
  ];

  return (
    <div className={styles.grid}>
      {chapters.map((chapter, index) => (
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

export default Chapters;
