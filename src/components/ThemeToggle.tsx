import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  theme: "dark" | "light";
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200 hover:bg-[var(--color-accent-muted)] text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] cursor-pointer"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
