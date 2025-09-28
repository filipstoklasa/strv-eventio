import { useQuery } from "@tanstack/react-query";
import { postRefresh } from "../../../api/refresh/refresh";
import { useUserContext } from "src/context/user-context";

export const useRefetchUser = () => {
  const { user, setUser } = useUserContext();

  return useQuery({
    queryFn: async () => {
      const user = await postRefresh({
        refreshToken: localStorage.getItem("refreshToken")!,
      });

      setUser(user);
      return user;
    },
    queryKey: ["refresh"],
    enabled: !user && !!localStorage.getItem("refreshToken"),
    refetchOnWindowFocus: false,
  });
};
