import { createFileRoute, redirect } from "@tanstack/react-router";
import { Home } from "src/pages/Home";
import { isAuthenticated } from "src/utils/auth";

export const Route = createFileRoute("/_app/")({
  component: Home,
  beforeLoad: async () => {
    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated()) {
      throw redirect({
        to: "/login",
      });
    }
  },
});
