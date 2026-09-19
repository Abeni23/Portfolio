import { useEffect, useRef } from "react";

/**
 * Attach an IntersectionObserver to elements with the `.scroll-reveal` class.
 * Adds `.revealed` when they enter the viewport (once).
 * Respects `prefers-reduced-motion` — skips if user prefers reduced motion.
 */
export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Immediately reveal everything
      document.querySelectorAll(".scroll-reveal").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);
}
