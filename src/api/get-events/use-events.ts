import { useQuery } from "@tanstack/react-query";
import { getEvents } from "./get-events";

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });
};
