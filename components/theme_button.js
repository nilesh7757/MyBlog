"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // This ensures the icon is correct after the initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    // Return null on the first render to prevent mismatched icons
    return null;
  }

  return (
    <button
    className="px-[10px]"
      onClick={toggleTheme}
      style={{
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'transparent'
      }}
    >
      {theme === "dark" ? <SunIcon size={50} /> : <MoonIcon size={50} />}
    </button>
  );
}
