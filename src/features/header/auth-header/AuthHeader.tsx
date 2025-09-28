import { SignUpLink } from "src/features/sign-up-link";
import styles from "./AuthHeader.module.css";

export const AuthHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <SignUpLink className={styles.forgot} />
    </header>
  );
};
