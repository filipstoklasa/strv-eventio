import { Outlet } from "@tanstack/react-router";
import { RootLayout } from "src/features/layout";

export const Root = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};
