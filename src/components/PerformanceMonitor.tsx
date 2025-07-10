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
        // Send to analytics if needed
        if ('value' in entry && typeof entry.value === 'number' && window.gtag) {
          window.gtag('event', entry.name, {
            value: Math.round(entry.value),
            event_category: 'Web Vitals',
          });
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
          // Removed console.warn for slow image loads
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    // Monitor navigation timing
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          // Navigation timing monitoring (removed console.log)
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