import type { paths } from "codegen/eventio";
import apiClient from "src/api/client";

export type LeaveEventResponse =
  paths["/events/{id}/attendees/me"]["delete"]["responses"]["200"]["content"]["application/json"];

export const leaveEvent = async (id: string) => {
  const response = await apiClient.delete<LeaveEventResponse>(
    `/events/${id}/attendees/me`
  );

  return response.data;
};
