import { z } from "zod"
  
export const EnlistFormSchema = z.object({
  entity_id: generateSecretStringSchema("entity id"),
  entity_name: generateNonemptyStringSchema("entity name"),
  access_key: generateSecretStringSchema("access key"),
  confirm_access_key: generateSecretStringSchema("confirm access key"),
}).refine((values) => values.access_key === values.confirm_access_key, {
  message: "secret strings do not match",
  path: ["confirm_password"],
})

export const EntryFormSchema = z.object({
  entity_id: generateSecretStringSchema("entity id"),
  access_key: generateNonemptyStringSchema("secret string can not be left empty"),
})

export const ForgotAccessKeyFormSchema = z.object({
  entity_id: generateSecretStringSchema("entity id"),
})

export function generateNonemptyStringSchema(field: string) {
  return z
    .string(`${field} can not be left empty`)
    .min(1, `${field} can not be left empty`);
}

export function generateSecretStringSchema(field: string) {
  return z
    .string()
    .min(8, `${field} must be at least 8 characters long`)
    .max(128, `${field} must be less than 128 characters`)
    .regex(/[A-Z]/, `${field} must contain at least one uppercase letter`)
    .regex(/[a-z]/, `${field} must contain at least one lowercase letter`)
    .regex(/[0-9]/, `${field} must contain at least one number`)
    .regex(/[^A-Za-z0-9]/, `${field} must contain at least one special character`)
}