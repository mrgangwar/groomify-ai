import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition-all duration-300",
        "disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-violet-600 text-white hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.45)]",
        variant === "secondary" &&
          "glass-effect hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}