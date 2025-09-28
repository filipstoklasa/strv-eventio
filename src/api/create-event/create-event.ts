import { AxiosError } from "axios";
import type { paths } from "codegen/eventio";
import apiClient from "src/api/client";

export type CreateEventResponse =
  paths["/events"]["post"]["responses"]["200"]["content"]["application/json"];

export type CreateEventRequest =
  paths["/events"]["post"]["requestBody"]["content"]["application/json"];

export const createEvent = async (payload: CreateEventRequest) => {
  try {
    const response = await apiClient.post<CreateEventResponse>(
      `/events`,
      payload
    );

    return response.data;
  } catch (error) {
    // Note -  Map response error messages so they can be shown in the UI.
    if (error instanceof AxiosError && error?.response?.data) {
      throw error.response.data;
    }
  }
};
