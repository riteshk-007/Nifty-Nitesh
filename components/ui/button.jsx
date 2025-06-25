import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-accent to-green-neon text-black shadow-button hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
        primary:
          "bg-gradient-to-r from-accent to-green-neon text-black shadow-button hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-black hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border-2 border-accent/60 bg-background-card/50 text-text-primary backdrop-blur-sm hover:border-accent hover:bg-accent/10 hover:text-accent",
        success:
          "bg-gradient-to-r from-success to-green-neon text-black shadow-button hover:shadow-glow hover:-translate-y-0.5",
        destructive:
          "bg-error text-white shadow-md hover:bg-error/90 hover:-translate-y-0.5",
        ghost:
          "text-text-primary hover:bg-accent/10 hover:text-accent rounded-lg",
        link: "text-accent underline-offset-4 hover:underline hover:text-green-neon rounded-none",
        cta: "bg-gradient-to-r from-accent via-green-neon to-accent bg-size-200 bg-pos-0 text-black shadow-glow hover:bg-pos-100 hover:shadow-glow-lg hover:-translate-y-1 animate-glow font-bold",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-12 py-5 text-lg",
        icon: "h-12 w-12",
        "icon-sm": "h-9 w-9",
        "icon-lg": "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
