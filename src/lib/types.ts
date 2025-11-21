import { z } from "zod"
import { EntryFormSchema, EnlistFormSchema, ForgotAccessKeyFormSchema } from "./zod-schemas"
import { ChatCompletion, ChatCompletionMessageParam, CompletionUsage } from "openai/resources/index.mjs"

export type EnlistFormSchemaType = z.infer<typeof EnlistFormSchema>

export type EntryFormSchemaType = z.infer<typeof EntryFormSchema>

export type ForgotAccessKeyFormSchemaType = z.infer<typeof ForgotAccessKeyFormSchema>

export type OpenAIChatMessage = ChatCompletionMessageParam

export type OpenAIChatResponse = {
  message: OpenAIChatMessage;
  finishReason: OpenAIFinishReason;
  tokenUsed: OpenAITokenUsed;
  error?: string;
}

export type OpenAIFinishReason = ChatCompletion.Choice['finish_reason']

export type OpenAITokenUsed = CompletionUsage['total_tokens']