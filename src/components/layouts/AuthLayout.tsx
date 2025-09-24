interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <h1>Auth</h1>
      {children}
    </div>
  );
};
