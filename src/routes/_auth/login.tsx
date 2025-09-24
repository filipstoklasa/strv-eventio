import { createFileRoute } from "@tanstack/react-router";
import { Login } from "src/pages/Login";

export const Route = createFileRoute("/_auth/login")({
  component: Login,
});
