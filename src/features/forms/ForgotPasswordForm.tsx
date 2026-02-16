import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import {
  forgotPasswordSchema,
  type ForgotPasswordInput,
} from "@/schemas/forgotPasswordSchema";

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordInput) =>
    console.log("Forgot password email:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
      <div className="text-left">
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          {...register("email")}
          placeholder="Enter your email"
          className="mt-1"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <Button type="submit">Reset Password</Button>

      <div className="text-center">
        <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
          ← Back to login
        </Link>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
