import { useMutation } from "@tanstack/react-query";
import {
  createEvent,
  type CreateEventResponse,
  type CreateEventRequest,
} from "./create-event";

interface Issue {
  code: string;
  message: string;
  path: string[];
}

// Note - generated error interface does not reflect the actual error response.
export interface CreateEventError {
  message: string;
  code: string;
  issues: Issue[];
}

export const useCreateEvent = () => {
  return useMutation<
    CreateEventResponse | undefined,
    CreateEventError,
    CreateEventRequest
  >({
    mutationFn: createEvent,
  });
};
