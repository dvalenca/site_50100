import { siteConfig } from "@/content/site";

export default function BigNumber({
  className = "",
}: {
  className?: string;
}) {
  return (
    <p
      className={`font-display uppercase leading-none ${className}`}
      aria-label={`Número ${siteConfig.number}`}
    >
      {siteConfig.number}
    </p>
  );
}
