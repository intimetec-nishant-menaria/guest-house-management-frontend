import axios from "axios";
import toast from "react-hot-toast";

export const api = axios.create({
  baseURL: "https://localhost:7188/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please login again.");
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);