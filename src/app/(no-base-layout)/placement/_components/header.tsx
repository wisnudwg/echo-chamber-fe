"use client"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation"

export function Header({ className }: {
  className?: string;
}) {
  const router = useRouter();

  return (
    <header className={cn(className)}>
      <div className="h-fit w-fit opacity-30">
        <Logo colored size={40} />
      </div>
      <Button
        variant="constructive"
        className="p-2 h-fit w-fit"
        onClick={() => {
          router.push("/exiting");
        }}
      >
        <LogOut />
      </Button>
    </header>
  )
}