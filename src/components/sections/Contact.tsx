import { Mail } from "lucide-react";
import { socials } from "../../data/portfolio";
import { SectionHeading } from "../SectionHeading";
import { SocialIcons } from "../SocialIcons";

export function Contact() {
  // Find the email entry from socials
  const emailLink = socials.find(
    (s) => s.icon === "Mail" || s.href.startsWith("mailto:")
  );

  return (
    <section id="contact" className="py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="section-container scroll-reveal">
        <SectionHeading number="05" title="Contact" />

        <div className="max-w-xl">
          <p className="text-base md:text-lg text-[var(--color-muted-foreground)] leading-relaxed mb-8">
            I'm always interested in hearing about new opportunities, collaborations, or
            just having a conversation about technology. Feel free to reach out!
          </p>

          {/* Email CTA */}
          {emailLink && (
            <a
              href={emailLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send an email"
              className="inline-flex items-center gap-3 px-6 py-3 text-base font-medium rounded-lg bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity duration-200 mb-8"
            >
              <Mail size={18} />
              {emailLink.href.replace("mailto:", "")}
            </a>
          )}

          {/* Labeled social links */}
          <div className="mt-6">
            <SocialIcons
              links={socials}
              showLabels={true}
              size={18}
              className="flex-col sm:flex-row items-start sm:items-center gap-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
