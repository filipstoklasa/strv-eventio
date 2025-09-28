import type { GetEventsResponse } from "src/api/get-events/get-events";

export const filterFutureEvents = (data: GetEventsResponse = []) => {
  return data.filter((item) => {
    return new Date(item.startsAt).getTime() > new Date().getTime();
  });
};
