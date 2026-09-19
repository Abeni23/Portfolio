import { skills } from "../../data/portfolio";
import { SectionHeading } from "../SectionHeading";

export function Skills() {
  if (skills.length === 0) {
    return (
      <section id="skills" className="py-20 md:py-28" aria-labelledby="skills-heading">
        <div className="section-container scroll-reveal">
          <SectionHeading number="02" title="Skills" />
          <p className="text-[var(--color-muted-foreground)] italic">
            Skills coming soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 md:py-28" aria-labelledby="skills-heading">
      <div className="section-container scroll-reveal">
        <SectionHeading number="02" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-sm px-3 py-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-card-foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
