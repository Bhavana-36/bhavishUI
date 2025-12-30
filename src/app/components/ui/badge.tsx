import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:size-3 [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        /** Primary / default badge */
        default:
          "border-transparent bg-[#0A2A4F] text-[#C8A35F] hover:bg-[#0A2A4F]/90",

        /** Soft luxury badge */
        secondary:
          "border-[#C8A35F]/40 bg-[#F3E8D8] text-[#0A2A4F] hover:bg-[#F3E8D8]/80",

        /** Important / warning badge (luxury style, not harsh red) */
        destructive:
          "border-[#C8A35F] bg-[#C8A35F] text-[#0A2A4F] hover:bg-[#C8A35F]/90",

        /** Minimal outline badge */
        outline:
          "border-[#C8A35F] text-[#0A2A4F] hover:bg-[#C8A35F]/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
