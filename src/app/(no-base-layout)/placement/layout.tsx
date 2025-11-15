import { ReactNode } from "react";
import { Center } from "@/components/center";
import { Header } from "./header";

export default function Layout({ children }: {
  children: ReactNode;
}) {
  return (
    <main className="bg-zinc-950 w-screen h-screen flex flex-col">
      <Header className="flex flex-row items-center justify-between p-4 bg-zinc-900" />
      <div className="flex-grow overflow-y-scroll flex flex-row justify-center m-4">
        {children}
      </div>
      <div className="" />
    </main>
  )
}