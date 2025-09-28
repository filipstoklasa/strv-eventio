import { useMutation } from "@tanstack/react-query";
import { useUserContext } from "src/context/user-context";
import { leaveEvent, type LeaveEventResponse } from "./leave-event";
import type { GetEventsResponse } from "src/api/get-events";

export const useLeaveEvent = () => {
  const { user } = useUserContext();

  return useMutation<LeaveEventResponse, Error, string, GetEventsResponse>({
    mutationFn: leaveEvent,
    onMutate: async (eventId, context) => {
      await context.client.cancelQueries({ queryKey: ["events"] });

      const previousEvents = context.client.getQueryData<GetEventsResponse>([
        "events",
      ]);

      context.client.setQueryData<GetEventsResponse>(["events"], (old) =>
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

      return previousEvents || [];
    },
    onError: (_err, _newEvent, onMutateResult, context) => {
      context.client.setQueryData<GetEventsResponse>(
        ["events"],
        onMutateResult
      );
    },
    onSettled: (_data, _error, _variables, _onMutateResult, context) =>
      context.client.invalidateQueries({ queryKey: ["events"] }),
  });
};
