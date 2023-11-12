"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  console.log(theme);

  return (
    <Button
      size={"icon"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant={"ghost"}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 ease-in dark:-rotate-90 dark:scale-0" />

      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-200 ease-in dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
