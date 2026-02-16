import { api } from "@/services/api";
import axios from "axios"; 
import Label from "@/components/common/Label";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginInput } from "@/utils/schemas/loginSchema";
import { loginSchema } from "@/utils/schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      const res = await api.post("/auth/login", data, {
      withCredentials: true,
    }); 
      console.log(res.data);
      toast.success("Logged in successfully!", { duration: 3000 });
      navigate("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Login error:", err.message);
      }
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Login failed");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="password">Password:</Label>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center justify-between text-sm">
        <Label className="flex items-center gap-2 cursor-pointer">
          <Input type="checkbox" {...register("rememberMe")} />
          Remember me
        </Label>

        <Link to="/forgot-password" className="text-blue-600 hover:underline">
          Forgot password?
        </Link>
      </div>

      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
