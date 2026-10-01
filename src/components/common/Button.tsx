import type { ButtonHTMLAttributes, ReactNode } from "react";

const VARIANT_CLASSES = {
  primary:
    "bg-primary-bright text-ink shadow-primary-glow hover:bg-primary-deep",
  dark: "bg-surface-5 text-ink-soft hover:bg-surface-6",
  ghost: "bg-transparent text-ink-soft hover:bg-surface-alpha-5 hover:text-ink",
  outline:
    "border border-line-soft bg-transparent text-ink hover:bg-surface-alpha-10",
} as const;

const SIZE_CLASSES = {
  sm: "h-8 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-xl",
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof VARIANT_CLASSES;
  size?: keyof typeof SIZE_CLASSES;
  icon?: ReactNode;
  children?: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-[2px] font-condensed font-bold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}
