import { useMemo } from "react";
import { Card } from "src/components/card";
import { useUserContext } from "src/context/user-context";
import { useControlsContext } from "src/context/controls-context";
import { useEditEvent } from "./hooks/use-edit-event";
import { DetailView } from "./components/detail-view";
import { CompactView } from "./components/compact-view";
import type { EventCardProps } from "./types";

export const EventCard = (props: EventCardProps) => {
  const { user } = useUserContext();
  const { view } = useControlsContext();
  const editEvent = useEditEvent();

  const isFull = props.attendees.length === props.maxAttendees;
  const isInPast = new Date(props.date).getTime() < new Date().getTime();
  const isEditDisabled = isFull || isInPast;

  const action = useMemo(() => {
    if (!user || props.ownerId === user.id) {
      return null;
    }

    if (props.attendees.find(({ id }) => id === user.id)) {
      return "leave";
    }

    return "join";
  }, [props.attendees, props.ownerId, user]);

  return (
    <Card>
      {view === "detail" ? (
        <DetailView
          action={action}
          disabled={isEditDisabled}
          editEvent={editEvent}
          {...props}
        />
      ) : (
        <CompactView
          action={action}
          disabled={isEditDisabled}
          editEvent={editEvent}
          {...props}
        />
      )}
    </Card>
  );
};
