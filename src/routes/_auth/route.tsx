import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AuthLayout } from "src/feature/layouts";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
