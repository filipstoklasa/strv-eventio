import React, { type ReactNode } from "react";
import clsx from "clsx";
import IconSpinnerLight from "src/assets/icons/icon-spinner-light.svg?react";
import styles from "./Button.module.css";

type ButtonSize = "normal" | "small";
type ButtonVariant = "primary" | "secondary" | "alert" | "disabled" | "link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "normal",
  loading = false,
  disabled,
  children,
  className,
  icon: Icon,
  ...props
}) => {
  const isDisabled = disabled || variant === "disabled" || loading;

  return (
    <button
      className={clsx(
        styles.button,
        styles[isDisabled ? "disabled" : variant],
        styles[size],
        !!Icon && styles.withIcon,
        className,
        {
          [styles.loading]: loading,
        }
      )}
      disabled={isDisabled}
      {...props}
    >
      {Icon}
      {loading ? <IconSpinnerLight className={styles.spinner} /> : children}
    </button>
  );
};
