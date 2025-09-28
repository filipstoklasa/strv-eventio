import type { ReactNode } from "react";
import styles from "./PageModal.module.css";

export const PageModal = ({ children }: { children: ReactNode }) => {
  return <dialog className={styles.modal}>{children}</dialog>;
};
