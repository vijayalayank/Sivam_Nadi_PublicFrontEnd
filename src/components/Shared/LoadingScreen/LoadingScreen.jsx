import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.circle}></div>

      <h2 className={styles.title}>
        ✨ Reading Your Destiny ✨
      </h2>

      <p className={styles.subtitle}>
        Please wait while we prepare your insights...
      </p>
    </div>
  );
};

export default LoadingScreen;