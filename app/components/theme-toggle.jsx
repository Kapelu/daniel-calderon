"use client"

import { useTheme } from "../hooks/use-theme"

export function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme()

    // 🚨 NO renderizar hasta estar montado en el cliente
    if (!mounted) return null

    return (
        <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="
        fixed
        top-4
        right-4
        z-50
        rounded-full
        p-1
        text-xl
        bg-zinc-200
        dark:bg-zinc-800
        transition
        hover:scale-110
      "
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    )
}
