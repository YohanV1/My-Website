"use client";

import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
}

export default function LazySection({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  fallback,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add a small delay to ensure smooth loading
          setTimeout(() => setHasLoaded(true), 100);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={sectionRef}
      className={`transition-opacity duration-500 ${
        hasLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {isVisible ? children : fallback}
    </div>
  );
} 