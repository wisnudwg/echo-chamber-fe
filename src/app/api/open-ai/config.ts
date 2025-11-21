import OpenAI from "openai";

export const openAI = new OpenAI({
  baseURL: "https://models.github.ai/inference",
  apiKey: process.env.OPENAI_API_KEY,
});
