import { Avatar } from "src/features/avatar";
import styles from "./AppHeader.module.css";

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <Avatar />
    </header>
  );
};
