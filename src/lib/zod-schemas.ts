import { z } from "zod"

export const SecretStringSchema = z
  .string()
  .min(8, "secret string must be at least 8 characters long")
  .max(128, "secret string must be less than 128 characters")
  .regex(/[A-Z]/, "secret string must contain at least one uppercase letter")
  .regex(/[a-z]/, "secret string must contain at least one lowercase letter")
  .regex(/[0-9]/, "secret string must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "secret string must contain at least one special character")

  
export const EnlistFormSchema = z.object({
  entity_id: SecretStringSchema,
  access_key: SecretStringSchema,
  confirm_access_key: SecretStringSchema,
}).refine((values) => values.access_key === values.confirm_access_key, {
  message: "secret strings do not match",
  path: ["confirm_password"],
})

export const EntryFormSchema = z.object({
  entity_id: SecretStringSchema,
  access_key: generateNonemptyStringSchema("secret string can not be left empty"),
})

export const ForgotAccessKeyFormSchema = z.object({
  entity_id: SecretStringSchema,
})

export function generateNonemptyStringSchema(message: string) {
  return z.string(message).min(1, message);
}