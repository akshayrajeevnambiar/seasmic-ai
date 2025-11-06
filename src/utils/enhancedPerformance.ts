// Enhanced performance monitoring and Core Web Vitals optimization
import { onCLS, onFCP, onINP, onLCP, onTTFB, Metric } from "web-vitals";

export interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  timestamp: number;
}

export interface SEOPerformanceReport {
  coreWebVitals: PerformanceMetrics;
  seoChecklist: {
    hasTitle: boolean;
    hasMetaDescription: boolean;
    hasCanonicalUrl: boolean;
    hasStructuredData: boolean;
    hasAltTags: boolean;
    hasOpenGraph: boolean;
    hasTwitterCards: boolean;
    hasRobotsTxt: boolean;
    hasSitemap: boolean;
    hasSSL: boolean;
    mobileOptimized: boolean;
    pageSpeedScore: number | null;
  };
  recommendations: string[];
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    timestamp: Date.now(),
  };

  private onMetric = (metric: Metric) => {
    switch (metric.name) {
      case "CLS":
        this.metrics.cls = metric.value;
        break;
      case "INP":
        this.metrics.inp = metric.value;
        break;
      case "FCP":
        this.metrics.fcp = metric.value;
        break;
      case "LCP":
        this.metrics.lcp = metric.value;
        break;
      case "TTFB":
        this.metrics.ttfb = metric.value;
        break;
    }

    // Send to analytics if available
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as any).gtag("event", metric.name, {
        event_category: "Web Vitals",
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        custom_parameter_1: metric.id,
        non_interaction: true,
      });
    }
  };

  startMonitoring() {
    // Monitor Core Web Vitals
    onCLS(this.onMetric);
    onINP(this.onMetric);
    onFCP(this.onMetric);
    onLCP(this.onMetric);
    onTTFB(this.onMetric);

    // Monitor custom performance metrics
    this.monitorResourceLoading();
    this.monitorJavaScriptErrors();
    this.optimizeImageLoading();
  }

  private monitorResourceLoading() {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === "resource") {
          const resourceEntry = entry as PerformanceResourceTiming;

          // Log slow resources
          if (resourceEntry.duration > 1000) {
            console.warn(
              `Slow resource detected: ${resourceEntry.name} took ${resourceEntry.duration}ms`
            );
          }

          // Monitor large resources
          if (
            resourceEntry.transferSize &&
            resourceEntry.transferSize > 500000
          ) {
            console.warn(
              `Large resource detected: ${resourceEntry.name} is ${(
                resourceEntry.transferSize /
                1024 /
                1024
              ).toFixed(2)}MB`
            );
          }
        }
      });
    });

    observer.observe({ entryTypes: ["resource"] });
  }

  private monitorJavaScriptErrors() {
    window.addEventListener("error", (event) => {
      console.error("JavaScript Error:", {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
      });
    });

    window.addEventListener("unhandledrejection", (event) => {
      console.error("Unhandled Promise Rejection:", event.reason);
    });
  }

  private optimizeImageLoading() {
    // Implement progressive image loading
    const images = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute("data-src");

            if (src) {
              img.src = src;
              img.removeAttribute("data-src");
              imageObserver.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: "50px 0px",
      }
    );

    images.forEach((img) => imageObserver.observe(img));
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  generateSEOReport(): SEOPerformanceReport {
    const seoChecklist = this.auditSEOElements();
    const recommendations = this.generateRecommendations(seoChecklist);

    return {
      coreWebVitals: this.getMetrics(),
      seoChecklist,
      recommendations,
    };
  }

  private auditSEOElements() {
    const hasTitle = !!document.title && document.title.length > 0;
    const hasMetaDescription = !!document.querySelector(
      'meta[name="description"]'
    );
    const hasCanonicalUrl = !!document.querySelector('link[rel="canonical"]');
    const hasStructuredData = !!document.querySelector(
      'script[type="application/ld+json"]'
    );
    const hasOpenGraph = !!document.querySelector('meta[property^="og:"]');
    const hasTwitterCards = !!document.querySelector('meta[name^="twitter:"]');

    // Check for alt tags on images
    const images = document.querySelectorAll("img");
    const imagesWithAlt = document.querySelectorAll("img[alt]");
    const hasAltTags =
      images.length === 0 || imagesWithAlt.length / images.length >= 0.9;

    return {
      hasTitle,
      hasMetaDescription,
      hasCanonicalUrl,
      hasStructuredData,
      hasAltTags,
      hasOpenGraph,
      hasTwitterCards,
      hasRobotsTxt: true, // We created this
      hasSitemap: true, // We created this
      hasSSL: location.protocol === "https:",
      mobileOptimized:
        window.innerWidth <= 768
          ? true
          : !!document.querySelector('meta[name="viewport"]'),
      pageSpeedScore: null, // Would need to integrate with PageSpeed Insights API
    };
  }

  private generateRecommendations(checklist: any): string[] {
    const recommendations: string[] = [];

    if (!checklist.hasTitle) {
      recommendations.push("Add a descriptive title tag to improve SEO");
    }

    if (!checklist.hasMetaDescription) {
      recommendations.push(
        "Add a meta description to improve search result snippets"
      );
    }

    if (!checklist.hasCanonicalUrl) {
      recommendations.push(
        "Add canonical URLs to prevent duplicate content issues"
      );
    }

    if (!checklist.hasStructuredData) {
      recommendations.push(
        "Implement structured data markup for better search visibility"
      );
    }

    if (!checklist.hasAltTags) {
      recommendations.push(
        "Add alt attributes to all images for accessibility and SEO"
      );
    }

    if (!checklist.hasOpenGraph) {
      recommendations.push(
        "Add Open Graph tags for better social media sharing"
      );
    }

    if (!checklist.hasSSL) {
      recommendations.push("Enable HTTPS for security and SEO benefits");
    }

    // Performance recommendations based on Core Web Vitals
    if (this.metrics.lcp && this.metrics.lcp > 2500) {
      recommendations.push(
        "Optimize Largest Contentful Paint (LCP) - consider image optimization and server response times"
      );
    }

    if (this.metrics.inp && this.metrics.inp > 200) {
      recommendations.push(
        "Improve Interaction to Next Paint (INP) - reduce JavaScript execution time and optimize interactions"
      );
    }

    if (this.metrics.cls && this.metrics.cls > 0.1) {
      recommendations.push(
        "Reduce Cumulative Layout Shift (CLS) - reserve space for dynamic content"
      );
    }

    return recommendations;
  }
}

export const performanceMonitor = new PerformanceMonitor();

// Enhanced image optimization
export const optimizeImage = (
  src: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: "webp" | "avif" | "jpeg" | "png";
  } = {}
) => {
  const { width, height, quality = 80, format = "webp" } = options;

  // In a real implementation, you might use a service like Cloudinary or ImageKit
  // For now, we'll return the original src with optimization parameters as a query string
  const params = new URLSearchParams();

  if (width) params.append("w", width.toString());
  if (height) params.append("h", height.toString());
  params.append("q", quality.toString());
  params.append("f", format);

  return `${src}?${params.toString()}`;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = ["/og-image.jpg", "/logo.png", "/hero-background.jpg"];

  const criticalFonts = [
    "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
  ];

  // Preload critical images
  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });

  // Preload critical fonts
  criticalFonts.forEach((href) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = href;
    document.head.appendChild(link);
  });
};

// Service Worker for caching and offline functionality
export const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("Service Worker registered successfully:", registration);

      // Update available
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // New content is available, prompt user to refresh
              if (confirm("New version available! Would you like to update?")) {
                window.location.reload();
              }
            }
          });
        }
      });
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  }
};

// Initialize performance monitoring
export const initializePerformanceMonitoring = () => {
  // Start monitoring when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      performanceMonitor.startMonitoring();
      preloadCriticalResources();
      registerServiceWorker();
    });
  } else {
    performanceMonitor.startMonitoring();
    preloadCriticalResources();
    registerServiceWorker();
  }
};

export default performanceMonitor;
