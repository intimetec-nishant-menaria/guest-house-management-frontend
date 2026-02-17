import type { User } from "@/utils/interfaces/user";

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  message: string | null;
}
