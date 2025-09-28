import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./IconButton.module.css";

interface IconButtonProps
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
