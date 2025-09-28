import { useLeaveEvent } from "src/api/leave-event";
import { useJoinEvent } from "src/api/join-event";

export const useEditEvent = () => {
  const join = useJoinEvent();
  const leave = useLeaveEvent();

  const changeEvent = (userId: string, action: "join" | "leave") => {
    switch (action) {
      case "join":
        return join.mutate(userId);
      case "leave":
        return leave.mutate(userId);
    }
  };

  return changeEvent;
};
