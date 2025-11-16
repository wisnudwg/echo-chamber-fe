import { create } from "zustand"
import { persist } from "zustand/middleware"

export type PlacementState = {
  x: number;
  y: number;
}

export type PlacementAction = {
  setX: (x: number) => void;
  setY: (y: number) => void;
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
    }),
    {
      name: "placement.store",
    }
  )
)