import { Button } from "src/components/button";
import { Typography } from "src/components/typography";
import type { ViewProps } from "../types";
import { formatEventDate } from "../../utils/format-event-date";
import styles from "./CompactView.module.css";

type CompactViewProps = ViewProps;

export const CompactView = ({
  disabled,
  action,
  editEvent,
  ...props
}: CompactViewProps) => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.itemName}>
        <Typography sm="lg">{props.name}</Typography>
      </div>
      <div className={styles.itemDescription}>
        <Typography sm="md" variant="secondary">
          {props.description}
        </Typography>
      </div>
      <div className={styles.itemOrganizer}>
        <Typography sm="md" variant="secondary">
          {props.organizer}
        </Typography>
      </div>
      <div className={styles.itemDate}>
        <Typography sm="sm" variant="secondary">
          {formatEventDate(props.date)}
        </Typography>
      </div>
      <div className={styles.itemAttendees}>
        <Typography sm="sm" variant="secondary">
          {props.attendees.length} of {props.maxAttendees}
        </Typography>
      </div>
      <div className={styles.itemButton}>
        {action ? (
          <Button
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
