import { OpenAIChatMessage, OpenAIFinishReason, OpenAITokenUsed } from "@/lib/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export type OpenAIState = {
  finishReason: OpenAIFinishReason;
  input: string;
  messages: OpenAIChatMessage[];
  tokenUsed: OpenAITokenUsed;
}

export type OpenAIAction = {
  setFinishReason: (payload: OpenAIState['finishReason']) => void;
  setInput: (payload: OpenAIState['input']) => void;
  setMessages: (payload: OpenAIState['messages']) => void;
  setTokenUsed: (payload: OpenAIState['tokenUsed']) => void;
  reset: () => void;
}

type OpenAIStore = OpenAIAction & {
  state: OpenAIState;
}

const iState: OpenAIState = {
  input: "",
  finishReason: "stop",
  messages: [],
  tokenUsed: 0,
}

export const useOpenAIStore = create<OpenAIStore>()(
  persist(
    (set, get) => ({
      state: {
        ...iState,
      },
      setFinishReason: (payload) => {
        set({
          state: {
            ...get().state,
            finishReason: payload,
          },
        });
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
      setTokenUsed: (payload) => {
        set({
          state: {
            ...get().state,
            tokenUsed: payload,
          },
        })
      },
      reset: () => {
        set({
          state: {
            ...iState,
          },
        })
      },
    }),
    {
      name: "open-ai.store",
    }
  )
)