import React from "react";
import clsx from "clsx";
import styles from "./Input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  error?: string;
  endIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  endIcon,
  ...inputProps
}) => {
  const isError = !!error;

  return (
    <div className={styles.wrapper}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <input
        id={label}
        autoComplete="off"
        aria-label={label}
        className={clsx(styles.input, {
          [styles.error]: isError,
        })}
        {...inputProps}
      />
      {endIcon ? <div className={styles.endIcon}>{endIcon}</div> : null}
      {isError ? <div className={styles.errorText}>{error}</div> : null}
    </div>
  );
};
