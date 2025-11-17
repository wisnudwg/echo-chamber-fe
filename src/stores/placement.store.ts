import { create } from "zustand"
import { persist } from "zustand/middleware"

export type PlacementState = {
  x: number;
  y: number;
}

export type PlacementAction = {
  getXLabel: () => string;
  getYLabel: () => string;
  setX: (x: number) => void;
  setY: (y: number) => void;
  reset: () => void;
}

export type PlacementStore = PlacementAction & {
  state: PlacementState;
}

const iState: PlacementState = {
  x: 0,
  y: 0,
}

export const usePlacementStore = create<PlacementStore>()(
  persist(
    (set, get) => ({
      state: {
        ...iState,
      },
      getXLabel: () => {
        const x = get().state.x;
        if (x === 0) return "Neutral";
        return x > 0 ? "Individual" : "Systemic";
      },
      getYLabel: () => {
        const y = get().state.y;
        if (y === 0) return "Neutral";
        return y > 0 ? "Authority" : "Fluidity";
      },
      setX: (x) => {
        set({
          state: {
            ...get().state,
            x,
          }
        })
      },
      setY: (y) => {
        set({
          state: {
            ...get().state,
            y,
          },
        })
      },
      reset: () => {
        set({
          state: {
            ...iState,
          },
        })
      },
    }),
    {
      name: "placement.store",
    }
  )
)