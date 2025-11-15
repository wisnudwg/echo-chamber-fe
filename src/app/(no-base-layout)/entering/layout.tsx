"use client"

import { ReactNode, useMemo } from "react";
import { Center } from "@/components/center";
import { Logo } from "@/components/logo";
import { useIsMobile } from "@/hooks";

export default function Layout({ children }: {
  children: ReactNode;
}) {
  const isMobile = useIsMobile();

  const size = useMemo(() => {
    return isMobile ? 600 : 1200;
  }, [isMobile]);

  return (
    <main className="bg-zinc-950 w-screen h-screen relative overflow-hidden">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Logo animated colored direction="reverse" size={size} />
      </div>
      <Center className="">
        <div className="z-10">
          {children}
        </div>
      </Center>
    </main>
  )
}