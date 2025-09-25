import { useState } from "react";
import { Input, type InputProps } from "src/components/input/Input";
import IconShow from "src/assets/icon-show.svg?react";
import styles from "./PasswordInput.module.css";

export const PasswordInput = (props: InputProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <Input
      {...props}
      type={visible ? "text" : "password"}
      endIcon={
        <button
          type="button"
          aria-label="Toggle password visibility"
          className={styles.iconButton}
          onPointerDown={toggleVisibility}
          onPointerUp={toggleVisibility}
        >
          <IconShow />
        </button>
      }
    />
  );
};
