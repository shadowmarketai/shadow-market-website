import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "accent" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      default: "bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))]/90 shadow-lg shadow-[hsl(var(--primary))]/20",
      secondary: "bg-[hsl(var(--secondary))] text-white hover:bg-[hsl(var(--secondary))]/90 shadow-lg shadow-[hsl(var(--secondary))]/20",
      accent: "bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--accent))]/90 shadow-lg shadow-[hsl(var(--accent))]/20",
      outline: "border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white",
      ghost: "hover:bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]",
    }

    const sizes = {
      default: "h-12 px-6 py-3 text-base",
      sm: "h-9 px-4 py-2 text-sm",
      lg: "h-14 px-8 py-4 text-lg",
      icon: "h-10 w-10",
    }

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
