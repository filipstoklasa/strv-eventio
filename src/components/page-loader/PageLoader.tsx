import IconSpinner from "src/assets/icons/icon-spinner.svg?react";
import styles from "./PageLoader.module.css";

export const PageLoader = () => {
  return <IconSpinner className={styles.spinner} />;
};
