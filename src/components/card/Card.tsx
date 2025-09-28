import type { ReactNode } from "react";
import styles from "./Card.module.css";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
