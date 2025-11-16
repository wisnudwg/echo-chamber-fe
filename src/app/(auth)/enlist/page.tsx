import { EnlistForm } from "@/components/forms/enlist.form";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${APP_NAME}: Enlist`,
  description: "",
}

export default function Page() {
  return (
    <section className="">
      <EnlistForm />
    </section>
  )
}