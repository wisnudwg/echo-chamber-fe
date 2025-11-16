"use client"

import { promiseDelay } from "@/lib/utils";
import { useRouter } from "next/navigation"
import { Fragment, useEffect } from "react"

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    promiseDelay(5000)
      .then(() => {
        router.push("/placement");
      });
  }, []);

  return (
    <Fragment>
      <span>Nobody forced you to be here</span>
      <span>You chose to be here</span>
    </Fragment>
  )
}