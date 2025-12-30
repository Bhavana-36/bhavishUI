import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "bg-[#0A2A4F] text-[#F3E8D8] hover:bg-[#0A2A4F]/90 focus-visible:ring-[#C8A35F]/40",

        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500/40",

        outline:
          "border border-[#C8A35F] bg-transparent text-[#0A2A4F] hover:bg-[#C8A35F]/10 focus-visible:ring-[#C8A35F]/40",

        secondary:
          "bg-[#F3E8D8] text-[#0A2A4F] hover:bg-[#F3E8D8]/80 focus-visible:ring-[#C8A35F]/40",

        ghost:
          "text-[#0A2A4F] hover:bg-[#C8A35F]/10 hover:text-[#0A2A4F]",

        link:
          "text-[#C8A35F] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
