import { ReactNode } from "react";
import { Center } from "@/components/center";
import { RotatingLogo } from "./_components/rotating-logo";

export default function Layout({ children }: {
  children: ReactNode;
}) {
  return (
    <main className="bg-zinc-950 w-screen h-screen relative overflow-hidden">
      <RotatingLogo />
      <Center className="backdrop-blur-sm lg:backdrop-blur-md">
        <div className="z-10">
          {children}
        </div>
      </Center>
    </main>
  )
}