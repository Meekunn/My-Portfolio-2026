import { useEffect, useState } from "react";

export const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 1024px)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isLargeScreen;
};