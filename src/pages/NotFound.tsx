import { AuthLayout } from "src/features/layouts";
import { NotFoundStatement } from "src/features/not-found-statement";

export const NotFound = () => {
  return (
    <AuthLayout>
      <NotFoundStatement />
    </AuthLayout>
  );
};
