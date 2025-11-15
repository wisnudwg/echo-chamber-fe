"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { EnlistFormSchemaType } from "@/lib/types"
import { EnlistFormSchema } from "@/lib/zod-schemas"
import { Stack } from "../stack"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { PasswordInput } from "../password-input"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"
import { Group } from "../group"
import { FormFieldErrorMessage } from "../form-field-error-message"
import { useRouter } from "next/navigation"

export function EnlistForm() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<EnlistFormSchemaType>({
    defaultValues: {
      entity_id: "",
      entity_name: "",
      access_key: "",
      confirm_access_key: "",
    },
    resolver: zodResolver(EnlistFormSchema),
  });

  const onSubmit = handleSubmit(
    async (payload: EnlistFormSchemaType) => {
      console.log(payload);
      toast({
        variant: "default",
        description: "Enlisting...",
      });
      setTimeout(() => {
        toast({
          variant: "default",
          description: "You are now enlisted and will be redirected to the system's entry point..."
        });
        router.push("/entry");
      }, 2000)
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
          <Stack className="gap-1">
            <Label>Entity Name</Label>
            <Input
              placeholder="Entity Name"
              {...register("entity_name")}
              className="bg-zinc-900"
            />
            <FormFieldErrorMessage message={errors.entity_name?.message} />
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
          <Stack className="gap-1">
            <Label>Confirm Access Key</Label>
            <PasswordInput
              placeholder="AccessKey#001"
              {...register("confirm_access_key")}
              className="bg-zinc-900"
            />
            <FormFieldErrorMessage message={errors.confirm_access_key?.message} />
          </Stack>
          <div className="mt-2">
            <Button
              type="submit"
              className="w-full"
              variant="destructive"
            >Enlist</Button>
          </div>
          <Group className="items-center justify-center text-sm italic">
            Already enlisted?&nbsp;<Link href="/entry" className="font-medium text-red-300">Enter here</Link>
          </Group>
        </Stack>
      </form>
    </div>
  )
}