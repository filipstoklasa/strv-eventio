import type { GetEventsResponse } from "src/api/get-events";

export interface EventCardProps {
  id: string;
  date: string;
  name: string;
  organizer: string;
  description: string;
  attendees: GetEventsResponse[number]["attendees"];
  maxAttendees: number;
  ownerId: string;
}
