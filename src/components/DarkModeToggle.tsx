import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaSyncAlt } from "react-icons/fa";

type Theme = "light" | "dark" | "system";

const DarkModeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    return saved || "system";
  });

  // Detect system dark mode preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Apply the theme
  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark" || (theme === "system" && prefersDark);

    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme, prefersDark]);

  // Cycle between modes: light → dark → system
  const cycleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
    );
  };

  return (
    <button
      onClick={cycleTheme}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && cycleTheme()}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 
                 text-gray-800 dark:text-gray-200 font-semibold transition-all duration-300 
                 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 
                 focus:ring-amber-400"
      aria-label={`Toggle theme (current: ${theme})`}
      title={`Current theme: ${theme === "system" ? "System Default" : theme}`}
    >
      <span
        className={`transition-transform duration-500 ease-in-out ${
          theme === "dark"
            ? "rotate-180 text-yellow-400"
            : theme === "light"
            ? "text-amber-600"
            : "text-blue-400"
        }`}
      >
        {theme === "dark" ? (
          <FaMoon />
        ) : theme === "light" ? (
          <FaSun />
        ) : (
          <FaSyncAlt />
        )}
      </span>
      <span className="capitalize hidden sm:inline">
        {theme === "system" ? "Auto" : theme}
      </span>
    </button>
  );
};

export default DarkModeToggle;
