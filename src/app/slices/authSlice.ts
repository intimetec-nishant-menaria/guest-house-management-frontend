import type { AuthState } from "@/utils/interfaces/authState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}
});

export default authSlice.reducer;
