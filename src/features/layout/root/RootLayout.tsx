import styles from "./RootLayout.module.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return <div className={styles.container}>{children}</div>;
};
