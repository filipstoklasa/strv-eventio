import { useMutation } from "@tanstack/react-query";
import {
  postAttendEvent,
  type PostAttendEventResponse,
} from "./post-attend-event";
import type { EventsResponse } from "../get-events/get-events";
import { useUserContext } from "src/context/user-context";

export const usePostAttendEvent = () => {
  const { user } = useUserContext();

  return useMutation<PostAttendEventResponse, Error, string, EventsResponse>({
    mutationFn: postAttendEvent,
    onMutate: async (eventId, context) => {
      // Cancel any outgoing re-fetches
      // (so they don't overwrite our optimistic update)
      await context.client.cancelQueries({ queryKey: ["events"] });

      // Snapshot the previous value
      const previousEvents = context.client.getQueryData<EventsResponse>([
        "events",
      ]);

      // Optimistically update to the new value
      context.client.setQueryData<EventsResponse>(["events"], (old) =>
        old?.map((event) => {
          if (event.id === eventId) {
            return { ...event, attendees: [...event.attendees, user!] };
          }
          return event;
        })
      );

      // Return a result with the snapshotted value
      return previousEvents || [];
    },
    // If the mutation fails,
    // use the result returned from onMutate to roll back
    onError: (_err, _newEvent, onMutateResult, context) => {
      context.client.setQueryData<EventsResponse>(["events"], onMutateResult);
    },
    // Always refetch after error or success:
    onSettled: (_data, _error, _variables, _onMutateResult, context) =>
      context.client.invalidateQueries({ queryKey: ["events"] }),
  });
};
