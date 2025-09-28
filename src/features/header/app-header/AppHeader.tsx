import { useLocation } from "@tanstack/react-router";
import { UserProfile } from "src/features/header/app-header/components/user-profile";
import { CloseEventForm } from "./components/close-event-form";
import styles from "./AppHeader.module.css";

export const AppHeader = () => {
  const { pathname } = useLocation();
  const isCreateEventPage = pathname === "/create-event";

  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      {isCreateEventPage ? <CloseEventForm /> : <UserProfile />}
    </header>
  );
};
