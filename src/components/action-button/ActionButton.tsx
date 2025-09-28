import IconPlus from "src/assets/icons/icon-plus.svg?react";
import { IconButton } from "src/components/icon-button";
import styles from "./ActionButton.module.css";

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
