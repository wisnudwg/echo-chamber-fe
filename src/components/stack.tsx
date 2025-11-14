import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Stack({ children, className }: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>{children}</div>
  )
}