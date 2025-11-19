import OpenAI from "openai";

export const clientOpenAI = new OpenAI({
  baseURL: "https://models.github.ai/inference",
  apiKey: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});