import { useEffect, useRef, useState } from "react";

interface PerformanceMetrics {
  navigationStart: number;
  loadComplete: number;
  domContentLoaded: number;
  firstPaint?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
}

export const usePerformanceMonitoring = (enableLogging = false) => {
  const metricsRef = useRef<PerformanceMetrics>({
    navigationStart: 0,
    loadComplete: 0,
    domContentLoaded: 0,
  });

  useEffect(() => {
    // Basic navigation timing
    const updateBasicMetrics = () => {
      const navigation = performance.timing;
      metricsRef.current = {
        ...metricsRef.current,
        navigationStart: navigation.navigationStart,
        loadComplete: navigation.loadEventEnd - navigation.navigationStart,
        domContentLoaded:
          navigation.domContentLoadedEventEnd - navigation.navigationStart,
      };
    };

    // Web Vitals and Paint metrics
    const updateWebVitals = () => {
      // First Paint
      const paintEntries = performance.getEntriesByType("paint");
      const fp = paintEntries.find((entry) => entry.name === "first-paint");
      const fcp = paintEntries.find(
        (entry) => entry.name === "first-contentful-paint"
      );

      if (fp) metricsRef.current.firstPaint = fp.startTime;
      if (fcp) metricsRef.current.firstContentfulPaint = fcp.startTime;

      // Largest Contentful Paint
      if ("PerformanceObserver" in window) {
        try {
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            metricsRef.current.largestContentfulPaint = lastEntry.startTime;
          });
          lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry: any) => {
              metricsRef.current.firstInputDelay =
                entry.processingStart - entry.startTime;
            });
          });
          fidObserver.observe({ entryTypes: ["first-input"] });

          // Cumulative Layout Shift
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                metricsRef.current.cumulativeLayoutShift = clsValue;
              }
            });
          });
          clsObserver.observe({ entryTypes: ["layout-shift"] });
        } catch (e) {
          // PerformanceObserver not supported
          if (enableLogging) {
            console.warn("PerformanceObserver not supported");
          }
        }
      }
    };

    // Update metrics when page loads
    if (document.readyState === "complete") {
      updateBasicMetrics();
      updateWebVitals();
    } else {
      window.addEventListener("load", () => {
        updateBasicMetrics();
        updateWebVitals();
      });
    }

    // Log metrics in development
    if (enableLogging && import.meta.env.DEV) {
      const logMetrics = () => {
        setTimeout(() => {
          console.group("🚀 Performance Metrics");
          console.log("Navigation Start:", metricsRef.current.navigationStart);
          console.log(
            "DOM Content Loaded:",
            `${metricsRef.current.domContentLoaded}ms`
          );
          console.log("Load Complete:", `${metricsRef.current.loadComplete}ms`);
          if (metricsRef.current.firstPaint) {
            console.log("First Paint:", `${metricsRef.current.firstPaint}ms`);
          }
          if (metricsRef.current.firstContentfulPaint) {
            console.log(
              "First Contentful Paint:",
              `${metricsRef.current.firstContentfulPaint}ms`
            );
          }
          if (metricsRef.current.largestContentfulPaint) {
            console.log(
              "Largest Contentful Paint:",
              `${metricsRef.current.largestContentfulPaint}ms`
            );
          }
          if (metricsRef.current.firstInputDelay) {
            console.log(
              "First Input Delay:",
              `${metricsRef.current.firstInputDelay}ms`
            );
          }
          if (metricsRef.current.cumulativeLayoutShift !== undefined) {
            console.log(
              "Cumulative Layout Shift:",
              metricsRef.current.cumulativeLayoutShift
            );
          }
          console.groupEnd();
        }, 2000);
      };

      window.addEventListener("load", logMetrics);
    }
  }, [enableLogging]);

  return metricsRef.current;
};

// Hook for measuring component render time
export const useRenderTime = (componentName: string, enableLogging = false) => {
  const startTimeRef = useRef<number>(performance.now());

  useEffect(() => {
    if (enableLogging && import.meta.env.DEV) {
      const renderTime = performance.now() - startTimeRef.current;
      console.log(
        `⚡ ${componentName} render time: ${renderTime.toFixed(2)}ms`
      );
    }
  });

  return startTimeRef.current;
};

// Hook for prefetching resources
export const usePrefetch = (urls: string[]) => {
  useEffect(() => {
    urls.forEach((url) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = url;
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup prefetch links
      urls.forEach((url) => {
        const links = document.querySelectorAll(`link[href="${url}"]`);
        links.forEach((link) => link.remove());
      });
    };
  }, [urls]);
};

// Debounce hook for performance
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
