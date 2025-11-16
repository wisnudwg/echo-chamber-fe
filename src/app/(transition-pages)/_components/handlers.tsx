"use client"

import { promiseDelay } from "@/lib/utils";
import { useAuthStore } from "@/stores/auth.store";
import { usePlacementStore } from "@/stores/placement.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function EnteringHandler() {
  const router = useRouter();

  useEffect(() => {
    promiseDelay(5000)
      .then(() => {
        router.push("/placement");
      });
  }, []);

  return null;
}

export function ExitingHandler() {
  const router = useRouter();
  const resetAuthStore = useAuthStore((st) => st.reset);
  const resetPlacementStore = usePlacementStore((st) => st.reset);

  useEffect(() => {
    resetAuthStore();
    resetPlacementStore();
    
    promiseDelay(5000)
      .then(() => {
        router.push("/entry");
      });
  }, []);

  return null;
}