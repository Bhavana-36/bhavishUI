"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "./utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-[#F3E8D8] rounded-lg", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",

        caption:
          "flex justify-center pt-1 relative items-center w-full text-[#0A2A4F]",
        caption_label: "text-sm font-semibold",

        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent border-[#C8A35F] text-[#0A2A4F] p-0 opacity-70 hover:opacity-100 hover:bg-[#C8A35F]/10",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",

        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell:
          "rounded-md w-8 font-medium text-[0.75rem] text-[#0A2A4F]/70",

        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:z-20",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),

        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal text-[#0A2A4F] hover:bg-[#C8A35F]/10",
        ),

        /* Selected day */
        day_selected:
          "bg-[#0A2A4F] text-[#F3E8D8] hover:bg-[#0A2A4F]/90 focus:bg-[#0A2A4F]",

        /* Range */
        day_range_start:
          "day-range-start bg-[#0A2A4F] text-[#F3E8D8]",
        day_range_end:
          "day-range-end bg-[#0A2A4F] text-[#F3E8D8]",
        day_range_middle:
          "aria-selected:bg-[#C8A35F]/20 aria-selected:text-[#0A2A4F]",

        /* Today */
        day_today:
          "bg-[#C8A35F]/20 text-[#0A2A4F] font-semibold",

        /* Disabled / outside */
        day_outside:
          "text-[#0A2A4F]/40 aria-selected:text-[#0A2A4F]/40",
        day_disabled: "text-[#0A2A4F]/30 opacity-50",
        day_hidden: "invisible",

        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft
            className={cn("size-4 text-[#0A2A4F]", className)}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight
            className={cn("size-4 text-[#0A2A4F]", className)}
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
