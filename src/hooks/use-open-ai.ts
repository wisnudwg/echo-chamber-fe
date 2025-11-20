"use client"

import { OpenAIChatMessage, OpenAIChatResponse } from "@/lib/types";
import { useOpenAIStore } from "@/stores/open-ai.store";
import axios from "axios";
import { useMutation } from "react-query";

export function useOpenAI() {
  const setFinishReason = useOpenAIStore((st) => st.setFinishReason);
  const setInput = useOpenAIStore((st) => st.setInput); 
  const setMessages = useOpenAIStore((st) => st.setMessages);
  const setTokenUsed = useOpenAIStore((st) => st.setTokenUsed);

  return useMutation({
    mutationFn: async () => {
      const userInput: OpenAIChatMessage = {
        role: "user",
        content: useOpenAIStore.getState().state.input,
      };

      const payload = {
        messages: [...useOpenAIStore.getState().state.messages, userInput],
      };

      const { data } = await axios.post<OpenAIChatResponse>("/api/open-ai", payload);
      return data;
    },
    onSuccess: (r) => {
      setFinishReason(r.finishReason);
      setInput("");
      setMessages([...useOpenAIStore.getState().state.messages, r.message]);
      setTokenUsed(r.tokenUsed);
    },
    // mutationFn: async (): Promise<OpenAIChatResponse> => {
    //   const userInput: OpenAIChatMessage = {
    //     role: "user",
    //     content: useOpenAIStore.getState().state.input,
    //   };

    //   const response = await fetch(
    //     "/api/open-ai",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         messages: [...useOpenAIStore.getState().state.messages, userInput],
    //       }),
    //     },
    //   );

    //   if (!response.ok) {
    //     throw new Error('Failed to get response from OpenAI');
    //   };

    //   return response.json();
    // },
    // onSuccess: (r) => {
    //   setFinishReason(r.finishReason);
    //   setInput("");
    //   setMessages([...useOpenAIStore.getState().state.messages, r.message]);
    //   setTokenUsed(r.tokenUsed);
    // },
    onError: (e: any) => {
      console.error(e);
    },
  });
}