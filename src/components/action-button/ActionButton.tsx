import IconPlus from "src/assets/icon-plus.svg?react";
import styles from "./ActionButton.module.css";
import { IconButton } from "../icon-button";

interface ActionButtonProps {
  action: () => void;
}

export const ActionButton = ({ action }: ActionButtonProps) => {
  return (
    <IconButton
      icon={<IconPlus />}
      className={styles.actionButton}
      onClick={action}
    />
  );
};
