import type { EventsResponse } from "src/api/get-events/get-events";

export const filterPastEvents = (data: EventsResponse = []) => {
  return data.filter((item) => {
    return new Date(item.startsAt).getTime() < new Date().getTime();
  });
};
