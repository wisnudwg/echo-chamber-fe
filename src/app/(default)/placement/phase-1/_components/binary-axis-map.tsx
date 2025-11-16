"use client"

import { useIsMobile } from "@/hooks";
import { cn } from "@/lib/utils";
import { usePlacementStore } from "@/stores/placement.store";
import { useMemo } from "react";

export function BinaryAxisMap() {
  const isMobile = useIsMobile();
  const x = usePlacementStore((st) => st.state.x);
  const y = usePlacementStore((st) => st.state.y);

  const normalizedPosition = useMemo(() => {
    return {
      x: (x + 100)/200,
      y: (y + 100)/200,
    }
  }, [x, y]);

  const labels = useMemo(() => {
    let xLabel = "Neutral";
    let yLabel = "Neutral";
    
    if (x > 0) xLabel = "Individual"
    if (x < 0) xLabel = "Systemic"
    if (y > 0) yLabel = "Authority"
    if (y < 0) yLabel = "Fluidity"

    return {
      x: xLabel,
      y: yLabel,
    }
  }, [x,y]);

  const sideLength = useMemo(() => {
    const cellLength = isMobile ? 16 : 24;
    return cellLength * 20;
  }, [isMobile]);

  const dotTranslation = useMemo(() => {
    return isMobile ? -6 : -9;
  }, [isMobile]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="md:text-lg">
        {"{ "}
        {labels.x}: <span className="font-medium">{Math.abs(x)}</span>{", "}
        {labels.y}: <span className="font-medium">{Math.abs(y)}</span>
        {" }"}
      </p>
      <div className="p-2 bg-zinc-300">
        <div className="relative" style={{ width: sideLength, height: sideLength }}>
          {/** Point */}
          <div
            className="z-20 h-3 w-3 md:h-4 md:w-4 rounded-full bg-red-500 absolute border border-zinc-900"
            style={{
              top: sideLength - sideLength * normalizedPosition.y,
              left: sideLength * normalizedPosition.x,
              transform: `translate(${dotTranslation}px, ${dotTranslation}px)`
            }}
          />

          {/** Axis Labels */}
          <span className="text-zinc-700 font-medium text-sm absolute top-[50%] left-2">Systemic</span>
          <span className="text-zinc-700 font-medium text-sm absolute top-[50%] right-2">Individual</span>
          <span className="text-zinc-700 font-medium text-sm absolute left-[51%] top-2">Authority</span>
          <span className="text-zinc-700 font-medium text-sm absolute left-[51%] bottom-2">Fluidity</span>

          <table>
            <tbody>
              {new Array(20).fill(0).map((_,i) => (
                <tr key={String(i)}>
                  {new Array(20).fill(0).map((_,j) => {
                    return (
                      <td
                        key={String(j)}
                        className={cn(
                          "border border-zinc-300 bg-white",
                          "w-[16px] h-[16px] md:w-[24px] md:h-[24px]",
                          i === 10 ? "border-t-2 border-t-zinc-700" : "",
                          j === 10 ? "border-l-2 border-l-zinc-700" : "",
                        )}
                      ></td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}