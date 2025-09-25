import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppLayout } from "src/features/layouts";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
