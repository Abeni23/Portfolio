import { Briefcase } from "lucide-react";
import { experience } from "../../data/portfolio";
import { SectionHeading } from "../SectionHeading";

export function Experience() {
  if (experience.length === 0) {
    return (
      <section id="experience" className="py-20 md:py-28" aria-labelledby="experience-heading">
        <div className="section-container scroll-reveal">
          <SectionHeading number="03" title="Experience" />
          <p className="text-[var(--color-muted-foreground)] italic">
            Experience details coming soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 md:py-28" aria-labelledby="experience-heading">
      <div className="section-container scroll-reveal">
        <SectionHeading number="03" title="Experience" />

        <div className="relative max-w-2xl">
          {experience.map((item, index) => (
            <div key={`${item.company}-${item.startDate}`} className="relative flex gap-5">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="timeline-dot" />
                {index < experience.length - 1 && <div className="timeline-line" />}
                {/* Single entry: short fade-out line */}
                {experience.length === 1 && (
                  <div
                    className="w-0.5 mt-0 flex-1 max-h-24"
                    style={{
                      background:
                        "linear-gradient(to bottom, var(--color-border), transparent)",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-12 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={14} className="text-[var(--color-accent)]" />
                  <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-wider">
                    {item.startDate} – {item.endDate}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-0.5">
                  {item.role}
                </h3>
                <p className="text-sm text-[var(--color-accent)] mb-4">
                  {item.company}
                </p>

                {/* Bullet points */}
                {item.bullets.length > 0 && (
                  <ul className="space-y-2 mb-5">
                    {item.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="relative pl-4 text-sm text-[var(--color-muted-foreground)] leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-border)]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech tags */}
                {item.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
