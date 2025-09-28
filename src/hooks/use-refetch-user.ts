import { useQuery } from "@tanstack/react-query";
import { refresh } from "src/api/refresh";
import { useUserContext } from "src/context/user-context";

// Note - Get users information after refreshing the page.
export const useRefetchUser = () => {
  const { user, setUser } = useUserContext();

  return useQuery({
    queryFn: async () => {
      const user = await refresh({
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
