import { ReactNode } from "react";
import { Center } from "@/components/center";
import { Header } from "./header";

export default function Layout({ children }: {
  children: ReactNode;
}) {
  return (
    <main className="bg-zinc-950 w-screen h-screen relative overflow-hidden">
      <Header />
      <Center className="">
        <div className="">
          {children}
        </div>
      </Center>
    </main>
  )
}