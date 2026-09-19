import { GraduationCap } from "lucide-react";
import { profile, education } from "../../data/portfolio";
import { SectionHeading } from "../SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28" aria-labelledby="about-heading">
      <div className="section-container scroll-reveal">
        <SectionHeading number="01" title="About" />

        <div className="grid md:grid-cols-[1fr,auto] gap-10 md:gap-16 items-start">
          {/* Bio */}
          <div>
            <p className="text-base md:text-lg text-[var(--color-muted-foreground)] leading-relaxed">
              {profile.about}
            </p>
          </div>

          {/* Education card(s) */}
          {education.length > 0 && (
            <div className="flex flex-col gap-4 md:min-w-[280px]">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--color-accent-muted)]">
                      <GraduationCap size={18} className="text-[var(--color-accent)]" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                      Education
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-sm leading-snug mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {edu.degree} in {edu.field}
                  </p>
                  <p className="font-mono text-xs text-[var(--color-muted)] mt-1">
                    {edu.startYear} – {edu.endYear}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
