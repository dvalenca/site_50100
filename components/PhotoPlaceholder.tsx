type PhotoPlaceholderProps = {
  label: string;
  note?: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
};

export default function PhotoPlaceholder({
  label,
  note = "Foto será publicada quando disponibilizada pela campanha.",
  className = "",
  backgroundColor = "bg-brand-purple",
  textColor = "text-brand-mint",
}: PhotoPlaceholderProps) {
  return (
    <figure
      className={`texture-paper flex min-h-56 flex-col items-center justify-center gap-3 border-[4px] border-ink p-6 text-center ${backgroundColor} ${textColor} ${className}`}
    >
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" stroke="currentColor" strokeWidth="2" />
        <circle cx="8" cy="10" r="2" fill="currentColor" />
        <path d="M4 17l5-5 3 3 4-4 4 4" stroke="currentColor" strokeWidth="2" />
      </svg>
      <figcaption className="font-display text-lg uppercase leading-tight">
        {label}
        <span className="mt-2 block font-body text-xs normal-case opacity-80">{note}</span>
      </figcaption>
    </figure>
  );
}
