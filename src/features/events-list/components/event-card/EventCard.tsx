import { useMemo } from "react";
import type { EventsResponse } from "src/api/get-events/get-events";
import { Card } from "src/components/card";

import { useUserContext } from "src/context/user-context";
import { useEditEvent } from "./hooks/use-edit-event";
import { DetailView } from "./components/detail-view";
import { CompactView } from "./components/compact-view/CompactView";
import { useControls } from "../controls/context";

interface EventCardProps {
  id: string;
  date: string;
  name: string;
  organizer: string;
  description: string;
  attendees: EventsResponse[number]["attendees"];
  maxAttendees: number;
  ownerId: string;
}

export const EventCard = (props: EventCardProps) => {
  const { user } = useUserContext();
  const { view } = useControls();
  const isFull = props.attendees.length === props.maxAttendees;
  const isInPast = new Date(props.date).getTime() < new Date().getTime();
  const isEditDisabled = isFull || isInPast;

  const editEvent = useEditEvent();

  const action = useMemo(() => {
    if (!user) {
      return null;
    }

    if (props.ownerId === user.id) {
      return "edit";
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
