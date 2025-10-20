import { useEffect, useMemo } from "react";
import { getWebApp } from "../lib/telegram";

export const useTelegramWebApp = () => {
  const webApp = useMemo(() => getWebApp(), []);

  useEffect(() => {
    if (!webApp) return;

    webApp.ready?.();
    webApp.expand?.();
  }, [webApp]);

  return webApp;
};
