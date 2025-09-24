import { createRootRoute } from "@tanstack/react-router";
import { Root } from "src/pages/Root";
import { NotFound } from "src/pages/NotFound";

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});
