"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button"
import { cn } from "@/lib/utils";

export function NextButton({ className, disabled, label, onClick }: {
  className?: string;
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      disabled={disabled}
      variant="destructive"
      className={cn("text-lg py-2 pl-2 pr-0", className)}
      size="lg"
      onClick={() => onClick?.()}
    >
      {label || "Next"}
      <ChevronRight />
    </Button>
  )
}

export function PrevButton({ className, disabled, label, onClick }: {
  className?: string;
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      disabled={disabled}
      variant="constructive"
      className={cn("text-lg py-2 pl-0 pr-2", className)}
      size="lg"
      onClick={() => onClick?.()}
    >
      <ChevronLeft />
      {label || "Prev"}
    </Button>
  )
}
