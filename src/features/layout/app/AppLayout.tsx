import type { ReactNode } from "react";
import { AppHeader } from "src/features/header";
import styles from "./AppLayout.module.css";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <AppHeader />
      <main className={styles.container}>{children}</main>
    </>
  );
};
