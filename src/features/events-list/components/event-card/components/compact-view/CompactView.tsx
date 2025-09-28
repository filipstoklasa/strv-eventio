import type { EventsResponse } from "src/api/get-events/get-events";
import { Button, type ButtonVariant } from "src/components/button";
import { Typography } from "src/components/typography";
import { formatEventDate } from "../../utils/format-event-date";
import styles from "./CompactView.module.css";

type EventActionType = "join" | "leave";

interface EventCardProps {
  id: string;
  date: string;
  name: string;
  organizer: string;
  description: string;
  attendees: EventsResponse[number]["attendees"];
  maxAttendees: number;
  ownerId: string;
  action: EventActionType | "edit" | null;
  editEvent: (id: string, action: EventActionType) => void;
  disabled?: boolean;
}

const buttonVariantMap: Record<EventActionType, ButtonVariant> = {
  join: "primary",
  leave: "alert",
};

export const CompactView = ({
  disabled,
  action,
  editEvent,
  ...props
}: EventCardProps) => {
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
        {action && action !== "edit" ? (
          <Button
            variant={buttonVariantMap[action]}
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
