import LoginForm from "@/features/forms/LoginForm";
import AuthLayout from "@/components/layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
