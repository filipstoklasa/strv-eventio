import { UserProfile } from "src/features/user-profile";
import styles from "./AppHeader.module.css";
import {
  useCanGoBack,
  useLocation,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import IconClose from "src/assets/icon-close.svg?react";
import { Button } from "src/components/button";

export const AppHeader = () => {
  const { pathname } = useLocation();
  const router = useRouter();
  const navigate = useNavigate();
  const canGoBack = useCanGoBack();

  const isCreateEventPage = pathname === "/create-event";

  const onClickClose = () => {
    if (canGoBack) {
      router.history.back();
    } else {
      navigate({ to: "/" });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      {isCreateEventPage ? (
        <div className={styles.createEventIcon}>
          <Button variant="link" icon={<IconClose />} onClick={onClickClose}>
            Close
          </Button>
        </div>
      ) : (
        <UserProfile />
      )}
    </header>
  );
};
