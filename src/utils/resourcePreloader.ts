// Resource preloading utilities for performance optimization

// Preload critical images
export const preloadCriticalImages = () => {
  const criticalImages = [
    "/assets/seismica-logo.png",
    "/assets/drone-hero-bg.mp4",
    // Add other critical images here
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = src.endsWith(".mp4") ? "video" : "image";
    link.href = src;
    document.head.appendChild(link);
  });
};

// Preload fonts
export const preloadFonts = () => {
  const fonts = [
    "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
  ];

  fonts.forEach((href) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = href;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    // Also add the actual stylesheet
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = href;
    styleLink.media = "print";
    styleLink.onload = () => {
      styleLink.media = "all";
    };
    document.head.appendChild(styleLink);
  });
};

// Prefetch next page resources
export const prefetchRoute = (route: string) => {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = route;
  document.head.appendChild(link);
};

// Prefetch commonly accessed resources
export const prefetchCommonResources = () => {
  // Prefetch legal pages (commonly accessed)
  prefetchRoute("/privacy-policy");
  prefetchRoute("/terms-of-use");

  // Note: Chunk prefetching would need to be adapted based on actual build output
  // For now, we focus on legal pages which are commonly accessed
};

// Setup critical resource hints
export const setupResourceHints = () => {
  // DNS prefetch for external resources
  const dnsHints = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ];

  dnsHints.forEach((domain) => {
    const link = document.createElement("link");
    link.rel = "dns-prefetch";
    link.href = domain;
    document.head.appendChild(link);
  });

  // Preconnect to critical origins
  const preconnectHints = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ];

  preconnectHints.forEach((origin) => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = origin;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  // Run optimizations when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setupResourceHints();
      preloadFonts();
      preloadCriticalImages();
      prefetchCommonResources();
    });
  } else {
    setupResourceHints();
    preloadFonts();
    preloadCriticalImages();
    prefetchCommonResources();
  }
};

// Lazy load non-critical resources
export const lazyLoadNonCriticalResources = () => {
  // Load non-critical CSS
  const nonCriticalCSS: string[] = [
    // Add paths to non-critical CSS files when needed
  ];

  nonCriticalCSS.forEach((href: string) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.media = "print";
    link.onload = () => {
      link.media = "all";
    };
    document.head.appendChild(link);
  });
};
