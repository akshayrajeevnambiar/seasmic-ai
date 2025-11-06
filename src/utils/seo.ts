// SEO utility functions and configurations
export const seoConfig = {
  siteName: "Seismic AI",
  siteUrl: "https://seismic-ai.vercel.app",
  defaultTitle:
    "Seismic AI - Revolutionary AI-Powered LiDAR Drone Technology for Energy Exploration",
  defaultDescription:
    "Transform energy exploration with Seismic AI's revolutionary LiDAR drone platform. AI-powered seismic analysis, real-time geological mapping, and sustainable mining solutions trusted by leading institutions worldwide.",
  defaultKeywords: [
    "AI seismic analysis",
    "LiDAR drone technology",
    "energy exploration",
    "oil and gas exploration",
    "sustainable mining",
    "geological surveying",
    "real-time seismic data",
    "machine learning geophysics",
    "drone surveying",
    "energy technology",
    "seismic intelligence",
    "geological mapping",
    "mining solutions",
    "geophysical analysis",
  ],
  author: "Seismic AI",
  twitterHandle: "@SeismicAI",
  linkedInProfile: "https://linkedin.com/company/seismic-ai",
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://seismic-ai.vercel.app/#organization",
    name: "Seismic AI",
    url: "https://seismic-ai.vercel.app/",
    logo: {
      "@type": "ImageObject",
      url: "https://seismic-ai.vercel.app/logo.png",
      width: 512,
      height: 512,
    },
    sameAs: [
      "https://linkedin.com/company/seismic-ai",
      "https://twitter.com/SeismicAI",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-825-747-2650",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global",
    },
    description:
      "Leading provider of AI-powered LiDAR drone technology for energy exploration and sustainable mining solutions",
  },
};

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterImage?: string;
  structuredData?: object;
  noindex?: boolean;
}

export const generateMetaTags = (seoData: SEOData = {}) => {
  const {
    title = seoConfig.defaultTitle,
    description = seoConfig.defaultDescription,
    keywords = seoConfig.defaultKeywords,
    canonicalUrl = seoConfig.siteUrl,
    ogImage = `${seoConfig.siteUrl}/og-default.jpg`,
    ogImageAlt = "Seismic AI - AI-powered LiDAR drone technology",
    twitterImage = `${seoConfig.siteUrl}/twitter-default.jpg`,
    structuredData,
    noindex = false,
  } = seoData;

  return {
    title,
    meta: [
      { name: "description", content: description },
      { name: "keywords", content: keywords.join(", ") },
      { name: "author", content: seoConfig.author },
      {
        name: "robots",
        content: noindex
          ? "noindex, nofollow"
          : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      { name: "distribution", content: "global" },
      { name: "rating", content: "general" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:site_name", content: seoConfig.siteName },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: ogImageAlt },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: seoConfig.twitterHandle },
      { name: "twitter:creator", content: seoConfig.twitterHandle },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: twitterImage },
      { name: "twitter:image:alt", content: ogImageAlt },

      // Additional meta tags for better SEO
      { name: "theme-color", content: "#000000" },
      { name: "msapplication-TileColor", content: "#000000" },
      { name: "application-name", content: seoConfig.siteName },
      { name: "apple-mobile-web-app-title", content: seoConfig.siteName },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "generator", content: "Vite + React + TypeScript" },
      { name: "referrer", content: "origin-when-cross-origin" },
    ],
    link: [
      { rel: "canonical", href: canonicalUrl },
      { rel: "alternate", href: canonicalUrl, hreflang: "en" },
      { rel: "alternate", href: canonicalUrl, hreflang: "x-default" },
    ],
    script: structuredData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify(structuredData),
          },
        ]
      : [],
  };
};

// Page-specific SEO configurations
export const pagesSEO = {
  home: {
    title:
      "Seismic AI - Revolutionary AI-Powered LiDAR Drone Technology for Energy Exploration",
    description:
      "Transform energy exploration with Seismic AI's revolutionary LiDAR drone platform. AI-powered seismic analysis, real-time geological mapping, and sustainable mining solutions trusted by leading institutions worldwide.",
    keywords: [
      "AI seismic analysis",
      "LiDAR drone technology",
      "energy exploration",
      "oil and gas exploration",
      "sustainable mining",
      "geological surveying",
      "real-time seismic data",
      "machine learning geophysics",
      "drone surveying",
      "energy technology",
    ],
    canonicalUrl: "https://seismic-ai.vercel.app/",
    ogImage: "https://seismic-ai.vercel.app/og-homepage.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        seoConfig.organizationSchema,
        {
          "@type": "WebPage",
          "@id": "https://seismic-ai.vercel.app/#homepage",
          url: "https://seismic-ai.vercel.app/",
          name: "Seismic AI - AI-Powered LiDAR Drone Technology",
          description:
            "Revolutionary AI-powered LiDAR drone platform transforming energy exploration",
          inLanguage: "en-US",
          mainEntity: {
            "@type": "SoftwareApplication",
            name: "Seismic AI Platform",
            description:
              "AI-powered LiDAR drone platform for energy exploration",
            applicationCategory: "Energy Technology",
            operatingSystem: "Cloud-based",
          },
        },
      ],
    },
  },

  privacyPolicy: {
    title: "Privacy Policy - Seismic AI | Data Protection & Privacy Practices",
    description:
      "Learn about Seismic AI's commitment to data privacy and protection. Our comprehensive privacy policy outlines how we collect, use, and safeguard your information.",
    canonicalUrl: "https://seismic-ai.vercel.app/privacy-policy",
    noindex: false,
  },

  termsOfUse: {
    title: "Terms of Use - Seismic AI | Service Terms & Conditions",
    description:
      "Review Seismic AI's terms of use and service conditions. Understand your rights and responsibilities when using our AI-powered LiDAR drone technology platform.",
    canonicalUrl: "https://seismic-ai.vercel.app/terms-of-use",
    noindex: false,
  },

  ethicsAI: {
    title: "Ethics & AI Transparency - Seismic AI | Responsible AI Development",
    description:
      "Discover Seismic AI's commitment to ethical AI development and transparency. Learn about our responsible AI practices, governance framework, and ethical guidelines.",
    canonicalUrl: "https://seismic-ai.vercel.app/ethics-ai-transparency",
    noindex: false,
  },
};

// Generate breadcrumb structured data
export const generateBreadcrumbData = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

// Generate FAQ structured data
export const generateFAQData = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

// Generate service structured data
export const generateServiceData = (
  services: Array<{ name: string; description: string }>
) => {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@id": "https://seismic-ai.vercel.app/#organization",
    },
    areaServed: "Worldwide",
  }));
};
