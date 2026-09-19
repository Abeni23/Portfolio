interface SectionHeadingProps {
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-10 md:mb-14">
      <span className="font-mono text-sm text-[var(--color-accent)] tracking-wider">
        {number}
      </span>
      <span className="text-[var(--color-muted)] text-sm tracking-wide">—</span>
      <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-[var(--color-border)] ml-4 hidden sm:block" />
    </div>
  );
}
