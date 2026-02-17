// import { loginUser } from "@/app/asyncThunk/authThunk";
import type { AuthState } from "@/utils/interfaces/authState";
import { createSlice } from "@reduxjs/toolkit";
// import { resetPassword } from "@/app/asyncThunk/authThunk";

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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginUser.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(loginUser.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.user = action.payload;
  //     })
  //     .addCase(loginUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload as string;
  //     })
  //     .addCase(resetPassword.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(resetPassword.fulfilled, (state) => {
  //       state.loading = false;
  //     })
  //     .addCase(resetPassword.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload as string;
  //     });
  // },
});

export default authSlice.reducer;
