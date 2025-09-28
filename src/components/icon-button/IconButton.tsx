import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./IconButton.module.css";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  icon: ReactNode;
}

export const IconButton = ({
  icon: Icon,
  className,
  name,
  ...props
}: IconButtonProps) => {
  return (
    <button
      aria-label={name}
      type="button"
      className={clsx(styles.iconButton, className)}
      {...props}
    >
      {Icon}
    </button>
  );
};
