import { createContext, useContext } from "react";

export type Filter = "all" | "future" | "past";
export type View = "detail" | "compact";

interface ControlsContext {
  filter: Filter;
  view: View;
  setFilter: (value: Filter) => void;
  setView: (value: View) => void;
}

export const controlsContext = createContext<ControlsContext | null>(null);

export const useControlsContext = () => {
  const context = useContext(controlsContext);

  if (!context) {
    throw new Error("useControls must be used within a ControlsProvider");
  }

  return context;
};
