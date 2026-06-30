"use client";

import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/themeStore";

export function ZustandThemeProvider({ children }: { children: React.ReactNode }) {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // If the user has not manually set a preference before, match their system theme
    const savedTheme = localStorage.getItem("theme-storage");
    if (!savedTheme) {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (systemPrefersDark) {
        useThemeStore.setState({ isDarkMode: true });
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [isDarkMode, mounted]);

  return <>{children}</>;
}
