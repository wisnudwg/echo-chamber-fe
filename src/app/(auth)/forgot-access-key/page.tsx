import { ForgotAccessKeyForm } from "@/components/forms/forgot-access-key.form"
import { APP_NAME } from "@/lib/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `${APP_NAME}: Forgot Access Key`,
  description: "",
}

export default function Page() {
  return (
    <section className="">
      <ForgotAccessKeyForm />
    </section>
  )
}