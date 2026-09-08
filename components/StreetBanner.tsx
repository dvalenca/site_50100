import { siteConfig } from "@/content/site";

export default function StreetBanner({
  text,
  backgroundColor = "bg-brand-purple",
  textColor = "text-brand-yellow",
}: {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
}) {
  const phrase = text ?? siteConfig.slogan;
  const repeated = Array.from({ length: 12 }, () => phrase).join(" • ");
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden border-y-4 border-ink py-3 ${backgroundColor} ${textColor}`}
    >
      <div className="flex w-max animate-banner whitespace-nowrap font-display text-2xl uppercase tracking-wide sm:text-3xl">
        <span>{repeated}&nbsp;</span>
        <span>{repeated}&nbsp;</span>
      </div>
    </div>
  );
}
