import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-extrabold whitespace-nowrap transition-[transform,filter,box-shadow,background-color] duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.96] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "campaign-button text-white hover:brightness-110 focus-visible:outline-offset-4",
        secondary:
          "campaign-button campaign-button-secondary text-ink hover:brightness-105",
        ghost:
          "border border-transparent bg-transparent text-ink shadow-none hover:bg-surface-muted",
      },
      size: {
        default: "h-12 px-5",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
