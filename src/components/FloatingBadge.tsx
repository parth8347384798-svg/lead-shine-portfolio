import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: string;
}

export const FloatingBadge = ({ children, className, animationDelay = "0s" }: FloatingBadgeProps) => {
  return (
    <div 
      className={cn(
        "absolute px-4 py-2 bg-[var(--badge-bg)] text-[var(--badge-text)] rounded-full text-sm font-medium shadow-float animate-float",
        className
      )}
      style={{ animationDelay }}
    >
      {children}
    </div>
  );
};