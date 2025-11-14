"use client"

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Center({ children, className }: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-row items-center justify-center h-full w-full", className)}>
      <div className="flex flex-col items-center justify-center h-fit w-fit">
        {children}
      </div>
    </div>
  )
}