import { ReactNode } from "react";
import { Center } from "@/components/center";
import { RotatingLogo } from "./_components/rotating-logo";

export default function Layout({ children }: {
  children: ReactNode;
}) {
  return (
    <main className="bg-zinc-950 w-screen h-screen relative overflow-hidden">
      <RotatingLogo />
      <Center className="">
        <div
          className="p-4 flex flex-col gap-4 items-center justify-center text-white text-xl md:text-3xl italic font-semibold bg-zinc-950 bg-opacity-90 w-screen h-screen backdrop-blur-sm"
        >
          {children}
        </div>
      </Center>
    </main>
  )
}