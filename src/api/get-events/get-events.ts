import apiClient from "src/api/client";
import type { paths } from "codegen/eventio";

export type EventsResponse =
  paths["/events"]["get"]["responses"]["200"]["content"]["application/json"];

export const getEvents = async () => {
  const response = await apiClient.get<EventsResponse>("/events");

  return response.data;
};
