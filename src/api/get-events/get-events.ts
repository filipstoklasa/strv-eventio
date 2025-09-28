import type { paths } from "codegen/eventio";
import apiClient from "src/api/client";

export type GetEventsResponse =
  paths["/events"]["get"]["responses"]["200"]["content"]["application/json"];

export const getEvents = async () => {
  const response = await apiClient.get<GetEventsResponse>("/events");

  return response.data;
};
