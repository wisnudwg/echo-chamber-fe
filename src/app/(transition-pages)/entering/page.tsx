import { Fragment } from "react";
import { EnteringHandler } from "../_components/handlers";
import { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${APP_NAME}: Entering`,
  description: "",
}

export default function Page() {
  return (
    <Fragment>
      <EnteringHandler />
      <span>Nobody forced you to be here</span>
      <span>You chose to be here</span>
    </Fragment>
  )
}