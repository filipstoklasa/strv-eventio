import { useState } from "react";
import { controlsContext, type Filter, type View } from "./controls-context";

export const ControlsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filter, setFilter] = useState<Filter>("all");
  const [view, setView] = useState<View>("detail");

  return (
    <controlsContext.Provider value={{ filter, view, setFilter, setView }}>
      {children}
    </controlsContext.Provider>
  );
};
