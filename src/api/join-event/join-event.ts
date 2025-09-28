import type { paths } from "codegen/eventio";
import apiClient from "src/api/client";

export type JoinEventResponse =
  paths["/events/{id}/attendees/me"]["post"]["responses"]["200"]["content"]["application/json"];

export const joinEvent = async (id: string) => {
  const response = await apiClient.post<JoinEventResponse>(
    `/events/${id}/attendees/me`
  );

  return response.data;
};
