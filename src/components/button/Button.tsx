import React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "disabled";
type ButtonSize = "normal" | "small";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "normal",
  loading = false,
  disabled,
  children,
  className,
  ...props
}) => {
  const isDisabled = disabled || variant === "disabled" || loading;

  return (
    <button
      className={clsx(styles.button, styles[variant], styles[size], className, {
        [styles.loading]: loading,
      })}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <span className={styles.spinner} aria-label="Loading" />
      ) : (
        children
      )}
    </button>
  );
};
