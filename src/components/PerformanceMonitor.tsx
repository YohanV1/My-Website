"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config: Record<string, unknown>) => void;
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log to console for debugging
        if ('value' in entry && typeof entry.value === 'number') {
          console.log(`${entry.name}: ${entry.value}`);
          
          // Send to analytics if needed
          if (window.gtag) {
            window.gtag('event', entry.name, {
              value: Math.round(entry.value),
              event_category: 'Web Vitals',
            });
          }
        }
      }
    });

    // Observe LCP, FID, CLS
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const resourceEntry = entry as PerformanceResourceTiming;
        if (resourceEntry.initiatorType === 'img' && resourceEntry.duration > 1000) {
          console.warn(`Slow image load: ${entry.name} took ${Math.round(resourceEntry.duration)}ms`);
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    // Monitor navigation timing
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Page Load Time:', Math.round(navEntry.loadEventEnd - navEntry.loadEventStart), 'ms');
        }
      }
    });

    navigationObserver.observe({ entryTypes: ['navigation'] });

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
      navigationObserver.disconnect();
    };
  }, []);

  return null;
} 