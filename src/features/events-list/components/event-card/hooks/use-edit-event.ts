import { useDeleteAttendEvent } from "src/api/delete-attend-event";
import { usePostAttendEvent } from "src/api/post-attend-event";

export const useEditEvent = () => {
  const join = usePostAttendEvent();
  const leave = useDeleteAttendEvent();

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
