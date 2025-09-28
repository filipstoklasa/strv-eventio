import { useNavigate } from "@tanstack/react-router";
import { Button } from "src/components/button";
import { Typography } from "src/components/typography";
import IconNotFound from "src/assets/icons/icon-not-found.svg?react";
import styles from "./NotFoundStatement.module.css";

export const NotFoundStatement = () => {
  const navigate = useNavigate();

  const onGoHome = () => {
    navigate({ to: "/" });
  };

  return (
    <>
      <IconNotFound className={styles.iconNotFound} />
      <div className={styles.container}>
        <Typography sm="2xl">404 Error - page not found</Typography>
        <Typography variant="secondary">
          Seems like Darth Vader just hits our website and drops it down. Please
          press the refresh button and everything should be fine again.
        </Typography>
        <Button variant="secondary" onClick={onGoHome}>
          GO HOME
        </Button>
      </div>
    </>
  );
};
