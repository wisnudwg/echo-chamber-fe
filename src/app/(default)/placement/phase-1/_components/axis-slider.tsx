"use client"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { usePlacementStore } from "@/stores/placement.store";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const LIMIT = 100;

export function AxisSlider({ axis }: {
  axis: 'x' | 'y';
}) {
  const pathname = usePathname();
  const value = usePlacementStore((st) => axis === "x" ? st.state.x : st.state.y);
  const setValue = usePlacementStore((st) => axis === "x" ? st.setX : st.setY);

  const question = useMemo(() => {
    return axis === "x" ?
      "Where does the ultimate agency for success / failure lie?"
      : "Where does the source of human order reside?"
  }, [axis]);

  const options = useMemo(() => {
    return [
      {
        className: "left-0",
        label: axis === "x" ? "Systemic" : "Fluidity",
        desc: axis === "x" ?
          "Outcomes are controlled by external economic and power structures."
          : "Truth must be constantly rebuilt by decentralized consensus.",
      },
      {
        className: "right-0",
        label: axis === "x" ? "Individual" : "Authority",
        desc: axis === "x" ?
          "Outcomes are determined by personal merit, effort, and accountability."
          : "Order requires unwavering respect for fixed institutions and hierarchy.",
      },
    ];
  }, [axis]);

  const answer = useMemo(() => {
    let output = "";
    if (value > 0) {
      output += axis === "x" ? "Individual" : "Authority";
    } else if (value < 0) {
      output += axis === "x" ? "Systemic" : "Fluidity";
    } else {
      output += "Neutral";
    }
    return output + (value !== 0 ? `: ${Math.abs(value)}/${LIMIT}` : ``);
  }, [axis, value])

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <p className="text-center text-lg font-medium italic md:w-[600px]">&ldquo;{question}&rdquo;</p>
      <p className="text-center text-xl font-medium">{answer}</p>
      <div className="flex flex-col my-10 items-center justify-center w-full">
        <div className="w-full relative">
          <span className="absolute text-lg font-medium top-[-2.5rem] left-0">{LIMIT}</span>
          <span className="absolute text-lg font-medium top-[-2.5rem] right-0">{LIMIT}</span>
          <Slider
            value={[value]}
            max={LIMIT}
            min={-LIMIT}
            step={1}
            className="placement-slider"
            onValueChange={(val) => setValue(Number(val))}
          />
          {options.map((opt, optIndex) => {
            const { className, label, desc } = opt;
            return (
              <Dialog
                key={String(optIndex)}
              >
                <DialogTrigger asChild>
                  <Link
                    key={String(optIndex)}
                    href={pathname}
                    className={cn("flex flex-row gap-1 items-center justify-start text-lg font-medium italic absolute top-[2rem]", className)}
                  >{label}<QuestionMarkCircledIcon style={{ width: 18, height: 18 }} /></Link>
                </DialogTrigger>
                <DialogContent className="p-3 md:p-4 w-[80vw] rounded-md" withCloseButton={false}>
                  <DialogTitle className="text-center">{label}</DialogTitle>
                  <div className="text-center text-lg">{desc}</div>
                </DialogContent>
              </Dialog>
            )
          })}
          <div className="h-4" />
        </div>
      </div>
    </div>
  )
}