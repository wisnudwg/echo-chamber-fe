"use client"

import { Logo } from "@/components/logo"
import { useIsMobile } from "@/hooks"
import { useMemo } from "react";

export function RotatingLogo() {
  const isMobile = useIsMobile();

  const size = useMemo(() => {
    return isMobile ? 800 : 1600;
  }, [isMobile]);

  return (
    <div
      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-10"
      style={{ width: size, height: size }}
    >
      <Logo animated colored size={size} />
    </div>
  )
}