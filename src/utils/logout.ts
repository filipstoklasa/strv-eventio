import { router } from "src/router";

export const logout = () => {
  localStorage.clear();
  router.navigate({ to: "/login", viewTransition: true });
};
