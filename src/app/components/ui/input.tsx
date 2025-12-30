import * as React from "react";
import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base input styles
        "flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base md:text-sm transition-[color,box-shadow] outline-none",

        // Brand colors
        "bg-[var(--brand-beige)] text-[var(--brand-navy)] border-[var(--brand-muted)]",
        "placeholder:text-neutral-500",

        // Focus styles (navy + soft ring)
        "focus-visible:border-[var(--brand-navy)] focus-visible:ring-[3px] focus-visible:ring-[var(--brand-navy)]/30",

        // Selection
        "selection:bg-[var(--brand-gold)] selection:text-[var(--brand-navy)]",

        // File input
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--brand-navy)]",

        // Disabled
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",

        // Error state
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/30",

        className
      )}
      {...props}
    />
  );
}

export { Input };
