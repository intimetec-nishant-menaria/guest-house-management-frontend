import ResetPasswordForm from "@/components/resetPasswordForm/ResetPasswordForm";
import AuthLayout from "@/components/layouts/AuthLayout";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    return <p className="text-red-500">Invalid or missing reset token.</p>;
  }

  return (
    <AuthLayout
      title="Reset Password"
      iconSrc="guest-house-management-frontend/src/assets/lock.jpg"
      iconAlt="Reset password"
    >
      <div className="text-center">
        <p className="mt-2 text-sm text-gray-500">
          Enter your new password below to reset your account.
        </p>

        <ResetPasswordForm token={token}/>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
