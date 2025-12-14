
import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export default function ScrollToHash() {
  const { location } = useRouterState();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return null;
}
