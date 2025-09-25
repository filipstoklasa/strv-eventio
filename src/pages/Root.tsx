import { Outlet } from "@tanstack/react-router";
import { RootLayout } from "src/features/layouts";

export const Root = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};
