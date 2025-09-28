import type { EventsResponse } from "src/api/get-events/get-events";
import { Button, type ButtonVariant } from "src/components/button";
import { Typography } from "src/components/typography";
import { formatEventDate } from "../../utils/format-event-date";
import styles from "./DetailView.module.css";
import IconUser from "src/assets/icon-user.svg?react";

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

export const DetailView = ({
  disabled,
  action,
  editEvent,
  ...props
}: EventCardProps) => {
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
        {action && action !== "edit" ? (
          <Button
            className={styles.eventButton}
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
