import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Group({ children, className }: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-row", className)}>{children}</div>
  )
}