type SectionTitleProps = {
  kicker?: string;
  title: string;
  description?: string;
  textColor?: string;
  kickerColor?: string;
};

export default function SectionTitle({
  kicker,
  title,
  description,
  textColor = "text-ink",
  kickerColor = "text-brand-orange",
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <p
          className={`font-body text-sm font-extrabold uppercase tracking-[0.2em] ${kickerColor}`}
        >
          {kicker}
        </p>
      ) : null}
      <h2 className={`mt-2 font-display text-4xl leading-[1.05] uppercase sm:text-5xl ${textColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-lg leading-relaxed ${textColor} opacity-90`}>{description}</p>
      ) : null}
    </div>
  );
}
