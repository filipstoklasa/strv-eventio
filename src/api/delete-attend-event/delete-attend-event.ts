import apiClient from "src/api/client";
import type { paths } from "codegen/eventio";

export type DeleteAttendEventResponse =
  paths["/events/{id}/attendees/me"]["delete"]["responses"]["200"]["content"]["application/json"];

export const deleteAttendEvent = async (id: string) => {
  const response = await apiClient.delete<DeleteAttendEventResponse>(
    `/events/${id}/attendees/me`
  );

  return response.data;
};
