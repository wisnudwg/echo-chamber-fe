"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ForgotAccessKeyFormSchemaType } from "@/lib/types"
import { ForgotAccessKeyFormSchema } from "@/lib/zod-schemas"
import { Stack } from "../stack"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"
import { Group } from "../group"
import { FormFieldErrorMessage } from "../form-field-error-message"

export function ForgotAccessKeyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotAccessKeyFormSchemaType>({
    defaultValues: {
      entity_id: "",
    },
    resolver: zodResolver(ForgotAccessKeyFormSchema),
  });

  const onSubmit = handleSubmit(
    async (payload: ForgotAccessKeyFormSchemaType) => {
      console.log(payload);
      toast({
        variant: "default",
        description: "Checking Entity ID...",
      })
    }
  )

  return (
    <div className="text-white w-[80vw] lg:w-[400px]">
      <form onSubmit={onSubmit}>
        <Stack className="gap-8 lg:gap-6">
          <Stack className="gap-1">
            <Label>Entity ID</Label>
            <Input
              placeholder="Entity#001"
              {...register("entity_id")}
              className="bg-zinc-900"
            />
            <FormFieldErrorMessage message={errors.entity_id?.message} />
          </Stack>
          <div className="mt-2">
            <Button
              type="submit"
              className="w-full"
              variant="destructive"
            >Submit</Button>
          </div>
          <Group className="items-center justify-center text-sm italic">
            Remember your Access Key?&nbsp;<Link href="/entry" className="font-medium text-red-300">Enter here</Link>
          </Group>
        </Stack>
      </form>
    </div>
  )
}