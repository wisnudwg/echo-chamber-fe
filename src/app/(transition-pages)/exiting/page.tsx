import { Fragment } from "react";
import { ExitingHandler } from "../_components/handlers";
import { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${APP_NAME}: Exiting`,
  description: "",
}

export default function Page() {
  return (
    <Fragment>
      <ExitingHandler />
      <span>Nobody forced you to leave</span>
      <span>You chose to leave</span>
    </Fragment>
  )
}