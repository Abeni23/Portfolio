import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile, socials } from "../../data/portfolio";
import { SocialIcons } from "../SocialIcons";
import { ThemeToggle } from "../ThemeToggle";

interface HeaderProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[var(--color-background)]/80 border-b border-[var(--color-border)]">
      <div className="section-container flex items-center justify-between h-16">
        {/* Name / Logo */}
        <a
          href="#"
          className="font-heading font-semibold text-lg tracking-tight hover:text-[var(--color-accent)] transition-colors"
        >
          {profile.name.split(" ")[0]}
          <span className="text-[var(--color-accent)]">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors rounded-lg hover:bg-[var(--color-accent-muted)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-1">
          <SocialIcons links={socials} size={16} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:bg-[var(--color-accent-muted)] text-[var(--color-muted-foreground)] cursor-pointer"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-lg"
          aria-label="Mobile navigation"
        >
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors rounded-lg hover:bg-[var(--color-accent-muted)]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 px-3 pt-3 mt-2 border-t border-[var(--color-border)]">
              <SocialIcons links={socials} size={18} />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
