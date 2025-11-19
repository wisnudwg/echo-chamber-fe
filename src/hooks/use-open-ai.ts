"use client"

import { useMutation } from "react-query";

type Mode = 'siso';

const handlerByMode = {
  siso: async (payload: { systemContent: string, userContent: string }): Promise<{ message: string, error?: string }> => {
    const response = await fetch('/api/open-ai/siso', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from OpenAI');
    };

    return response.json();
  },
}

export function useOpenAI(mode: Mode) {
  switch (mode) {
    default: return useMutation({ mutationFn: handlerByMode.siso });
  };
}