import { useCanGoBack, useNavigate, useRouter } from "@tanstack/react-router";
import { Button } from "src/components/button";
import IconClose from "src/assets/icons/icon-close.svg?react";
import styles from "./CloseEventForm.module.css";

export const CloseEventForm = () => {
  const router = useRouter();
  const navigate = useNavigate();
  const canGoBack = useCanGoBack();

  const onClickClose = () => {
    if (canGoBack) {
      router.history.back();
    } else {
      navigate({ to: "/" });
    }
  };

  return (
    <div className={styles.createEventIcon}>
      <Button variant="link" icon={<IconClose />} onClick={onClickClose}>
        Close
      </Button>
    </div>
  );
};
