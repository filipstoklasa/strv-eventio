import type { ReactNode } from "react";
import styles from "./IconButton.module.css";
import clsx from "clsx";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export const IconButton = ({
  icon: Icon,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.iconButton, className)}
      {...props}
    >
      {Icon}
    </button>
  );
};
