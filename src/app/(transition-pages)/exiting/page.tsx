"use client"

import { promiseDelay } from "@/lib/utils";
import { useAuthStore } from "@/stores/auth.store";
import { usePlacementStore } from "@/stores/placement.store";
import { useRouter } from "next/navigation"
import { Fragment, useEffect } from "react"

export default function Page() {
  const router = useRouter();
  const resetAuth = useAuthStore((st) => st.reset);
  const resetPlacement = usePlacementStore((st) => st.reset);

  useEffect(() => {
    resetAuth();
    resetPlacement();

    promiseDelay(5000)
      .then(() => {
        router.push("/entry");
      });
  }, []);

  return (
    <Fragment>
      <span>Nobody forced you to leave</span>
      <span>You chose to leave</span>
    </Fragment>
  )
}