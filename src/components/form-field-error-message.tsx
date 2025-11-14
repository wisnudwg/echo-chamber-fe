import { ReactNode } from "react";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

export function FormFieldErrorMessage({ className, message }: {
  className?: string;
  message?: ReactNode;
}) {
  if (!message) return null;

  return <Label className={cn("text-red-200 text-xs", className)}>{message}</Label>
}