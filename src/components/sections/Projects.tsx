import { ExternalLink, FolderOpen } from "lucide-react";
import { projects } from "../../data/portfolio";
import { SectionHeading } from "../SectionHeading";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function FeaturedProject({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Info */}
      <div>
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] mb-3 block">
          Featured Project
        </span>
        <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
          {project.title}
        </h3>
        <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-3 py-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-card-foreground)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity duration-200"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${project.title}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
        </div>
      </div>

      {/* Browser mockup */}
      <div className="browser-frame">
        <div className="browser-frame-header">
          <span className="browser-frame-dot bg-[#FF5F57]" />
          <span className="browser-frame-dot bg-[#FFBD2E]" />
          <span className="browser-frame-dot bg-[#28C840]" />
          <span className="flex-1 mx-3 h-6 rounded-md bg-[var(--color-background)] border border-[var(--color-border)] px-3 text-xs flex items-center text-[var(--color-muted)]">
            {project.liveUrl || project.githubUrl}
          </span>
        </div>
        <div className="aspect-video bg-[var(--color-background)] flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-[var(--color-muted)]">
              <FolderOpen size={40} strokeWidth={1} />
              <span className="font-mono text-xs">Screenshot coming soon</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] transition-colors hover:border-[var(--color-accent)]/30">
      <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-[var(--color-accent)] transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-2 py-1 rounded bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo of ${project.title}`}
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:underline"
          >
            <ExternalLink size={13} />
            Demo
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub repository for ${project.title}`}
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors"
        >
          <GithubIcon size={13} />
          Code
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  if (projects.length === 0) {
    return (
      <section id="projects" className="py-20 md:py-28" aria-labelledby="projects-heading">
        <div className="section-container scroll-reveal">
          <SectionHeading number="04" title="Projects" />
          <p className="text-[var(--color-muted-foreground)] italic">
            Projects coming soon — check back later!
          </p>
        </div>
      </section>
    );
  }

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-20 md:py-28" aria-labelledby="projects-heading">
      <div className="section-container scroll-reveal">
        <SectionHeading number="04" title="Projects" />

        {/* Featured project */}
        <FeaturedProject project={featured} />

        {/* Additional projects grid */}
        {rest.length > 0 && (
          <div className="mt-16">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)] mb-6">
              More Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
