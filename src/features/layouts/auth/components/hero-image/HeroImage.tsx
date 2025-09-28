import { Typography } from "src/components/typography";
import styles from "./HeroImage.module.css";

export const HeroImage = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.welcomeContainer}>
        <p className={styles.welcomeText}>“Great, kid. Don’t get cocky.”</p>
        <div className={styles.hyphen} />
        <Typography variant="secondary" className={styles.authorText}>
          Han Solo
        </Typography>
      </div>
    </div>
  );
};
