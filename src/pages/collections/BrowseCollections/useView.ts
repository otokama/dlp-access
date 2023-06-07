import { useState, useCallback } from "react";

export const useView = () => {
  const [view, setView] = useState("Gallery");

  const handleSetView = useCallback((_: string, viewType: string) => {
    setView(viewType);
  }, []);

  return { view, handleSetView };
};
