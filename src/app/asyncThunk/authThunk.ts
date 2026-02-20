import type { LoginInput } from "@/utils/schemas/loginSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/services/api";
import type { ForgotPasswordInput } from "@/utils/schemas/forgotPasswordSchema";
import type { ResetPasswordPayload } from "@/utils/interfaces/ResetPasswordPayload"

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: LoginInput, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Login failed");
    }
  },
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (data: ForgotPasswordInput, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/forgetPassword", data);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Failed to send reset link");
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data: ResetPasswordPayload, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/resetPassword", {
        email : data.email,
        token: data.token,
        newPassword: data.password,
        confirmPassword : data.confirmPassword
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Reset failed");
    }
  }
);
