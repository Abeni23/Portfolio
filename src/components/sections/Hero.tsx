import { ArrowDown, MapPin } from "lucide-react";
import { profile, socials } from "../../data/portfolio";
import { SocialIcons } from "../SocialIcons";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center pt-16"
      aria-label="Introduction"
    >
      <div className="section-container py-20 md:py-28">
        {/* Availability badge */}
        <div className="flex items-center gap-2.5 mb-8">
          <span className="availability-dot" />
          <span className="font-mono text-xs tracking-wider text-[var(--color-muted-foreground)] uppercase">
            {profile.availabilityStatus}
          </span>
        </div>

        {/* Name */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4">
          {profile.name}
          <span className="text-[var(--color-accent)]">.</span>
        </h1>

        {/* Role */}
        <p className="font-heading text-xl sm:text-2xl md:text-3xl font-medium text-[var(--color-muted-foreground)] mb-6">
          {profile.role}
        </p>

        {/* Bio */}
        <p className="text-base md:text-lg text-[var(--color-muted-foreground)] max-w-2xl leading-relaxed mb-8">
          {profile.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity duration-200"
          >
            View Projects
            <ArrowDown size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Social icons under CTAs */}
        <SocialIcons links={socials} size={18} className="mb-8" />

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
          <MapPin size={14} />
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
