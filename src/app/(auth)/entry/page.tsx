import { EntryForm } from "@/components/forms/entry.form";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${APP_NAME}: Entry`,
  description: "",
}

export default function Page() {
  return (
    <section className="">
      <EntryForm />
    </section>
  )
}