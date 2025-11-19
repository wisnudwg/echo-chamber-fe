"use client"

import { OpenAIChatMessage, OpenAIChatResponse } from "@/lib/types";
import { useMutation } from "react-query";

type Mode = 'mimo' | 'siso';

type IO = {
  mimo: {
    input: OpenAIChatMessage[];
    output: OpenAIChatResponse;
  }
  siso: {
    input: {
      systemContent: string;
      userContent: string;
    }
    output: OpenAIChatResponse;
  }
};

function generateFetchConfig(body: any) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}

const handlerByMode = {
  mimo: async (payload: IO['mimo']['input']): Promise<IO['mimo']['output']> => {
    const response = await fetch(
      '/api/open-ai/mimo',
      generateFetchConfig(payload),
    );

    if (!response.ok) {
      throw new Error('Failed to get response from OpenAI');
    };

    return response.json();
  },
  siso: async (payload: IO['siso']['input']): Promise<IO['siso']['output']> => {
    const response = await fetch(
      '/api/open-ai/siso',
      generateFetchConfig(payload),
    );

    if (!response.ok) {
      throw new Error('Failed to get response from OpenAI');
    };

    return response.json();
  },
}

export function useOpenAI(mode: Mode) {
  switch (mode) {
    case "mimo": return useMutation({ mutationFn: handlerByMode.mimo });
    case "siso": return useMutation({ mutationFn: handlerByMode.siso });
    default: return useMutation({ mutationFn: handlerByMode.siso });
  };
}