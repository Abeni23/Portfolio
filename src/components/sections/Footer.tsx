import { ArrowUp } from "lucide-react";
import { socials } from "../../data/portfolio";
import { SocialIcons } from "../SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: built-with + copyright */}
          <div className="flex flex-col items-center sm:items-start gap-1 text-sm text-[var(--color-muted)]">

            <span>© {currentYear} Abenezer Mengesha</span>
          </div>

          {/* Right: social icons + back to top */}
          <div className="flex items-center gap-3">
            <SocialIcons links={socials} size={16} />
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--color-border)] text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors duration-200 cursor-pointer"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
