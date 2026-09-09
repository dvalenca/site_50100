import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  external?: boolean;
  onDark?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center border-[3px] border-ink font-display uppercase leading-none shadow-[4px_4px_0_0_#16121f] transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5 hover:shadow-[5px_6px_0_0_#16121f]";

const variants = {
  primary: "bg-brand-orange text-white",
  secondary: "bg-transparent text-ink",
};

const variantsOnDark = {
  primary: "bg-brand-orange text-white",
  secondary: "border-white bg-transparent text-white shadow-[4px_4px_0_0_rgba(255,255,255,0.35)] hover:shadow-[5px_6px_0_0_rgba(255,255,255,0.35)]",
};

const sizes = {
  md: "min-h-12 px-6 py-2.5 text-base",
  lg: "min-h-14 px-8 py-3 text-xl",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  onDark = false,
  className = "",
}: ButtonProps) {
  const variantClass = (onDark ? variantsOnDark : variants)[variant];
  const sizeClass = sizes[size];
  const classes = `${base} ${variantClass} ${sizeClass} ${className}`;

  if (external) {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
