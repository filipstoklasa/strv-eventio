import { useMutation } from "@tanstack/react-query";
import {
  postCreateEvent,
  type PostCreateEventResponse,
  type PostCreateEventRequest,
} from "./post-create-event";

interface Issue {
  code: string;
  message: string;
  path: string[];
}

export interface PostCreateEventError {
  message: string;
  code: string;
  issues: Issue[];
}

export const useCreateEvent = () => {
  return useMutation<
    PostCreateEventResponse | undefined,
    PostCreateEventError,
    PostCreateEventRequest
  >({
    mutationFn: postCreateEvent,
  });
};
