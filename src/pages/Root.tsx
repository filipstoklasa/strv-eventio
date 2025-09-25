import { Outlet } from "@tanstack/react-router";
import { RootLayout } from "src/feature/layouts";

export const Root = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};
