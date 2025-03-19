"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-12 py-2 z-10">
      <nav className="max-w-4xl mx-auto h-full flex items-center justify-end gap-2 p-6">
        <Button
          variant="ghost"
          size="icon"
          id="theme-toggle"
          onClick={toggleTheme}
        >
          <span className="sr-only">Toggle theme</span>
          <Sun className="h-5 w-5 dark:hidden" />
          <Moon className="h-5 w-5 hidden dark:block" />
        </Button>
      </nav>
    </header>
  );
}
