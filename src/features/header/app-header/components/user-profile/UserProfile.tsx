import { useState } from "react";
import { useUserContext } from "src/context/user-context";
import { Avatar } from "src/components/avatar";
import IconDropdown from "src/assets/icons/icon-dropdown.svg?react";
import { IconButton } from "src/components/icon-button";
import { Button } from "src/components/button";
import { logout } from "src/utils/logout";
import styles from "./UserProfile.module.css";

export const UserProfile = () => {
  const { user } = useUserContext();
  const [isMenuVisible, showMenu] = useState(false);

  const toggleMenu = () => {
    showMenu((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Avatar
        firstName={user?.firstName || ""}
        lastName={user?.lastName || ""}
      />
      <IconButton
        name="show context"
        onClick={toggleMenu}
        icon={<IconDropdown />}
      />
      {isMenuVisible ? (
        <Button
          className={styles.logoutButton}
          size="small"
          variant="secondary"
          onClick={logout}
        >
          Logout
        </Button>
      ) : null}
    </div>
  );
};
