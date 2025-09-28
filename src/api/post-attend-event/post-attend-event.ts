import apiClient from "src/api/client";
import type { paths } from "codegen/eventio";

export type PostAttendEventResponse =
  paths["/events/{id}/attendees/me"]["post"]["responses"]["200"]["content"]["application/json"];

export const postAttendEvent = async (id: string) => {
  const response = await apiClient.post<PostAttendEventResponse>(
    `/events/${id}/attendees/me`
  );

  return response.data;
};
