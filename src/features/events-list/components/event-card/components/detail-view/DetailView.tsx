import { Button } from "src/components/button";
import { Typography } from "src/components/typography";
import type { ViewProps } from "../types";
import { formatEventDate } from "../../utils/format-event-date";
import IconUser from "src/assets/icons/icon-user.svg?react";
import styles from "./DetailView.module.css";

type DetailViewProps = ViewProps;

export const DetailView = ({
  disabled,
  action,
  editEvent,
  ...props
}: DetailViewProps) => {
  return (
    <div className={styles.cardContent}>
      <div>
        <Typography sm="sm" variant="secondary">
          {formatEventDate(props.date)}
        </Typography>
        <div className={styles.cardHeader}>
          <Typography className={styles.cardName} sm="xl">
            {props.name}
          </Typography>
          <Typography sm="sm" variant="secondary">
            {props.organizer}
          </Typography>
        </div>
        <div className={styles.cardDescription}>
          <Typography sm="md" variant="secondary">
            {props.description}
          </Typography>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardAttendees}>
          <IconUser />
          <Typography sm="sm" variant="secondary">
            {props.attendees.length} of {props.maxAttendees}
          </Typography>
        </div>
        {action ? (
          <Button
            className={styles.eventButton}
            variant={action === "join" ? "primary" : "alert"}
            disabled={disabled}
            size="small"
            onClick={() => editEvent(props.id, action)}
          >
            {action.toUpperCase()}
          </Button>
        ) : null}
      </div>
    </div>
  );
};
