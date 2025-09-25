import React from "react";
import clsx from "clsx";
import styles from "./Input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  error?: boolean;
  errorMessage?: string;
  endIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  endIcon,
  errorMessage,
  ...inputProps
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          id={label}
          autoComplete="off"
          aria-label={label}
          className={clsx(styles.input, {
            [styles.error]: error,
          })}
          {...inputProps}
        />
        {endIcon ? <div className={styles.endIcon}>{endIcon}</div> : null}
      </div>
      {errorMessage ? (
        <div className={styles.errorText}>{errorMessage}</div>
      ) : null}
    </div>
  );
};
