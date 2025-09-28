import { AuthLayout } from "src/features/layout";
import { NotFoundStatement } from "src/features/not-found-statement";

export const NotFound = () => {
  return (
    <AuthLayout>
      <NotFoundStatement />
    </AuthLayout>
  );
};
