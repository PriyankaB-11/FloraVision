import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "outline" | "icon" | "subscribe";
  size?: "sm" | "md" | "lg" | "icon";
  borderTone?: "primary" | "secondary";
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = "outline",
  size = "lg",
  borderTone = "primary",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const borderColor =
    borderTone === "secondary"
      ? "border-[var(--color-text-secondary)]"
      : "border-[var(--color-text-primary)]";

  const base =
    "inline-flex items-center justify-center box-border shrink-0 leading-none cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  const variants = {
    outline: `border-2 ${borderColor} rounded-md text-[var(--color-text-primary)] font-medium animate-button-hover hover:text-[var(--color-background)] bg-transparent`,
    icon: `border-2 ${borderColor} rounded-md text-[var(--color-text-primary)] animate-button-hover hover:text-[var(--color-background)] bg-transparent`,
    subscribe:
      "border-0 rounded-none uppercase text-[var(--color-footer-bg)] font-medium bg-[var(--color-text-primary)] hover:bg-[var(--color-text-secondary)]",
  };

  const sizes = {
    sm: "h-8 min-w-[6rem] px-3 text-[0.7rem]",
    md: "h-10 min-w-[8rem] px-4 text-sm",
    lg: "h-10 min-w-[8rem] px-10 text-[1.1rem]",
    icon: "h-10 w-10 p-0 text-[1.25rem]",
    subscribe: "h-full min-h-12 px-5 text-[0.9rem] min-w-[7rem]",
  };

  const resolvedSize =
    variant === "subscribe"
      ? "subscribe"
      : variant === "icon"
        ? "icon"
        : size;
  const resolvedVariant = variant;

  return (
    <button
      type={type}
      className={`${base} ${variants[resolvedVariant]} ${sizes[resolvedSize]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
