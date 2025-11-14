import { z } from "zod"
import { EntryFormSchema, EnlistFormSchema, ForgotAccessKeyFormSchema } from "./zod-schemas"

export type EnlistFormSchemaType = z.infer<typeof EnlistFormSchema>

export type EntryFormSchemaType = z.infer<typeof EntryFormSchema>

export type ForgotAccessKeyFormSchemaType = z.infer<typeof ForgotAccessKeyFormSchema>