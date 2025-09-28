import type { EventCardProps } from "../types";

export type EventActionType = "join" | "leave";

export interface ViewProps extends EventCardProps {
  action: EventActionType | null;
  editEvent: (id: string, action: EventActionType) => void;
  disabled?: boolean;
}
