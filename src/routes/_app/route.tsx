import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useRefetchUser } from "src/hooks/use-refetch-user";
import { AppLayout } from "src/features/layout";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  useRefetchUser();

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
