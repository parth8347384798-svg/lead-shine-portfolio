import { useState, useEffect } from "react";

interface AnimatedTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export const AnimatedText = ({ texts, interval = 2000, className = "" }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 200);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span 
      className={`transition-all duration-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${className}`}
    >
      {texts[currentIndex]}
    </span>
  );
};