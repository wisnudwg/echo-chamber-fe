import { ReactNode } from "react";
import { Center } from "@/components/center";

export default function Layout({ children }: {
  children: ReactNode;
}) {
  return (
    <main className="bg-zinc-950 w-screen h-screen relative overflow-hidden">
      <Center className="">
        <div className="z-10">
          {children}
        </div>
      </Center>
    </main>
  )
}