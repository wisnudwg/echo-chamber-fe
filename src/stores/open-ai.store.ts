import { OpenAIChatMessage } from "@/lib/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export type OpenAIState = {
  messages: OpenAIChatMessage[];
  input: string;
}

export type OpenAIAction = {
  addNewMessage: (payload: OpenAIChatMessage) => void;
  clearInput: () => void;
  setInput: (payload: string) => void;
  setMessages: (payload: OpenAIChatMessage[]) => void;
}

type OpenAIStore = OpenAIAction & {
  state: OpenAIState;
}

const iState: OpenAIState = {
  messages: [],
  input: "",
}

export const useOpenAIStore = create<OpenAIStore>()(
  persist(
    (set, get) => ({
      state: {
        ...iState,
      },
      addNewMessage: (payload) => {
        set({
          state: {
            ...get().state,
            messages: [...get().state.messages, payload],
          },
        });
      },
      clearInput: () => {
        set({
          state: {
            ...get().state,
            input: "",
          },
        })
      },
      setInput: (payload) => {
        set({
          state: {
            ...get().state,
            input: payload,
          },
        });
      },
      setMessages: (payload) => {
        set({
          state: {
            ...get().state,
            messages: [...payload],
          },
        })
      },
    }),
    {
      name: "open-ai.store",
    }
  )
)