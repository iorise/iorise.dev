"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
          <span className="sr-only">Switch to Dark Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
          <span className="sr-only">Switch to Light Mode</span>
        </>
      )}
    </Button>
  );
}
