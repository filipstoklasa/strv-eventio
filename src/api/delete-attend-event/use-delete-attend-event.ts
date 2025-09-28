import { useMutation } from "@tanstack/react-query";
import {
  deleteAttendEvent,
  type DeleteAttendEventResponse,
} from "./delete-attend-event";
import type { EventsResponse } from "../get-events/get-events";
import { useUserContext } from "src/context/user-context";

export const useDeleteAttendEvent = () => {
  const { user } = useUserContext();

  return useMutation<DeleteAttendEventResponse, Error, string, EventsResponse>({
    mutationFn: deleteAttendEvent,
    onMutate: async (eventId, context) => {
      // Cancel any outgoing refetches
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
            return {
              ...event,
              attendees: event.attendees.filter(
                (attendee) => attendee.id !== user?.id
              ),
            };
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
