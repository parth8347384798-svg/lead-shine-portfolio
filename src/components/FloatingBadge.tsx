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
        "absolute px-4 py-2 bg-white/95 backdrop-blur-sm text-foreground rounded-full text-sm font-semibold shadow-float border border-white/50 animate-float hover:scale-105 transition-all duration-300",
        className
      )}
      style={{ animationDelay }}
    >
      {children}
    </div>
  );
};