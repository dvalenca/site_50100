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
    <div className="max-w-2xl">
      {kicker ? (
        <p
          className={`font-body text-sm font-extrabold uppercase tracking-[0.2em] ${kickerColor}`}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={`mt-2 font-heading text-3xl font-extrabold leading-[1.1] sm:text-4xl ${textColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-lg leading-relaxed ${textColor} opacity-80`}>{description}</p>
      ) : null}
    </div>
  );
}
