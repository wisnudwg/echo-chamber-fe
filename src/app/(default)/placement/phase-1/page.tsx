"use client"

import { Center } from "@/components/center"
import { useState } from "react";
import { AxisSlider } from "./_components/axis-slider";
import { NextButton, PrevButton } from "@/components/common-buttons";
import { BinaryAxisMap } from "./_components/binary-axis-map";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  return (
    <Center className="text-white">

      <div className="flex flex-col gap-4 items-center justify-center bg-zinc-800 p-4 rounded-md">
        <h1 className="text-center text-2xl font-semibold">Binary Axis Mapping</h1>

        {/** step-based UI */}
        {step === 1 && <AxisSlider axis="y" />}
        {step === 2 && <AxisSlider axis="x" />}
        {step === 3 && <BinaryAxisMap />}
      </div>

      <div className="flex flex-row items-center justify-between mt-6 w-full">
        {step === 1 ? (<div className="h-2 w-2"></div>) : (
          <PrevButton
            disabled={step === 1}
            label="Back"
            onClick={() => {
              setStep((val) => val - 1)
            }}
          />
        )}
        <NextButton
          label={step === 3 ? "Phase 2" : "Next"}
          onClick={() => {
            step === 3 ? router.push("/placement/phase-2") : setStep((val) => val + 1)
          }}
        />
      </div>
    </Center>
  )
}