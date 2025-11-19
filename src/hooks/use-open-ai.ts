"use client"

import { useMutation } from "react-query";
import { clientOpenAI } from "@/instances";

export function useOpenAI() {
  return useMutation({
    mutationFn: async (payload: { systemContent: string, userContent: string }) => {
      const response = await clientOpenAI.chat.completions.create({
        messages: [
          { role: "system", content: payload.systemContent },
          { role: "user", content: payload.userContent },
        ],
        model: "openai/gpt-4o",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1,
      });
      return response.choices[0].message.content;
    },
    onError: (e) => {
      console.error("The sample encountered an error:", e);
    },
  });
}