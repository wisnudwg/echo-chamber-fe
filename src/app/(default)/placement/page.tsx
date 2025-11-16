"use client"

import { Center } from "@/components/center";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="text-white max-w-[500px]">
      <Center>
        <div className="flex flex-col gap-8 items-center justify-center">
          <p className="text-center font-medium text-lg md:text-2xl">
            Welcome to your safe space! Would you mind if we ask you some questions as part of your onboarding?
          </p>
          <Button
            variant="destructive"
            className="w-full text-lg"
            size="lg"
            onClick={() => {
              router.push("/placement/phase-1");
            }}
          >No, not at all!</Button>
        </div>
      </Center>
    </div>
  )
}