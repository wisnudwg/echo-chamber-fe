"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { EntryFormSchemaType } from "@/lib/types"
import { EntryFormSchema } from "@/lib/zod-schemas"
import { Stack } from "../stack"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { PasswordInput } from "../password-input"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"
import { Group } from "../group"
import { FormFieldErrorMessage } from "../form-field-error-message"

export function EntryForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<EntryFormSchemaType>({
    defaultValues: {
      entity_id: "",
      access_key: "",
    },
    resolver: zodResolver(EntryFormSchema),
  });

  const onSubmit = handleSubmit(
    async (payload: EntryFormSchemaType) => {
      console.log(payload);
      toast({
        variant: "default",
        description: "Trying to grant entry...",
      })
    }
  )

  return (
    <div className="text-white w-[80vw] lg:w-[400px]">
      <form onSubmit={onSubmit}>
        <Stack className="gap-8 lg:gap-4">
          <Stack className="gap-1">
            <Label>Entity ID</Label>
            <Input
              placeholder="Entity#001"
              {...register("entity_id")}
              className="bg-zinc-900"
            />
            <FormFieldErrorMessage message={errors.entity_id?.message} />
          </Stack>
          <Stack className="gap-1">
            <Label>Access Key</Label>
            <PasswordInput
              placeholder="AccessKey#001"
              {...register("access_key")}
              className="bg-zinc-900"
            />
            <FormFieldErrorMessage message={errors.access_key?.message} />
          </Stack>
          <div className="mt-2">
            <Button
              type="submit"
              className="w-full"
              variant="destructive"
            >Enter</Button>
          </div>
          <Group className="items-center justify-center text-sm italic">
            Not enlisted yet?&nbsp;<Link href="/enlist" className="font-medium text-red-300">Enlist here</Link>
          </Group>
          <Group className="items-center justify-center text-sm italic">
            Forgot your Access Key?&nbsp;<Link href="/forgot-access-key" className="font-medium text-red-300">Get a new one here</Link>
          </Group>
        </Stack>
      </form>
    </div>
  )
}