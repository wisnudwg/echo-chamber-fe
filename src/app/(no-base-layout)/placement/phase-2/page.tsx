"use client"

import { Center } from "@/components/center"
import { NextButton, PrevButton } from "@/components/common-buttons"
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  return (
    <Center className="text-white max-w-[500px]">
      <div className="flex flex-col gap-4 items-center justify-center bg-zinc-800 p-4 rounded-md">
        <h1 className="text-center text-2xl font-semibold">Phase 2 title goes here</h1>
      </div>

      <div className="flex flex-row items-center justify-between mt-6 w-full">
        <PrevButton
          label={step === 1 ? "Phase 1" : "Back"}
          onClick={() => {
            step === 1 ? router.push("/placement/phase-1") : setStep((val) => val-1)
          }}
        />
        <NextButton
          label={step === 3 ? "Phase 2" : "Next"}
          onClick={() => {
            step === 3 ? router.push("/placement/phase-3") : setStep((val) => val+1)
          }}
        />
      </div>
    </Center>
  )
}