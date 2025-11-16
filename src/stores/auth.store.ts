import { create } from "zustand"
import { persist } from "zustand/middleware"

export type AuthState = {
  entity_id: string;
  entity_name: string;
  token: string;
}

export type AuthAction = {
  setState: (payload: Partial<AuthState>) => void;
  reset: () => void;
}

type AuthStore = AuthAction & {
  state: AuthState;
}

const iState: AuthState = {
  entity_id: "",
  entity_name: "",
  token: "",
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      state: {
        ...iState,
      },
      setState: (payload) => {
        set({
          state: {
            ...get().state,
            ...payload,
          },
        })
      },
      reset: () => {
        set({
          state: {
            ...iState,
          }
        })
      }
    }),
    {
      name: "auth.store",
    },
  )
)