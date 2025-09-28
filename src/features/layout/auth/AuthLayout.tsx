import type { ReactNode } from "react";
import { AuthHeader } from "src/features/header";
import { HeroImage } from "./components/hero-image";
import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <AuthHeader />
      <div className={styles.container}>
        <HeroImage />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
