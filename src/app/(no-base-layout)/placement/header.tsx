"use client"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast";
import { promiseDelay } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 left-0 w-full flex flex-row items-center justify-between p-4">
      <div className="h-fit w-fit opacity-30">
        <Logo colored size={40} />
      </div>
      <Button
        variant="secondary"
        className="bg-green-700 text-white hover:bg-green-600 transition-all ease-in-out p-2 h-fit w-fit"
        onClick={() => {
          toast({
            variant: "default",
            description: "Exiting system...",
          });
          promiseDelay(500)
            .then(() => {
              router.push("/entry");
            });
        }}
      >
        <LogOut />
      </Button>
    </header>
  )
}