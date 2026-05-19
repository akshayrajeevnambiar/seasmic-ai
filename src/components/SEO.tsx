import { Helmet } from "react-helmet-async";
import { seoConfig } from "../content/seo";

interface SEOProps {
    pageKey?: keyof typeof seoConfig;
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: "website" | "article";
    articleMeta?: {
        publishedTime: string;
        author: string;
        tags?: string[];
    };
}

export function SEO({ pageKey, title, description, image, url, type = "website", articleMeta }: SEOProps) {
    const configMeta = pageKey ? seoConfig[pageKey] : null;

    // Merge config meta with manual props (manual props take precedence)
    const meta = {
        title: title || configMeta?.title || "Default Site Title",
        description: description || configMeta?.description || "",
        image: image || configMeta?.image || "",
        url: url || configMeta?.url || window.location.href,
        keywords: configMeta?.keywords || "",
    };

    // Adjust fallback URL to match the new project's domain
    const siteUrl = import.meta.env.VITE_BASE_URL || "https://seasmic.ai";

    // Base JSON-LD (Organization) - Update these details for the new company
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Seismic AI",
        "alternateName": "Seismic AI Technologies Inc.",
        "url": siteUrl,
        "logo": `${siteUrl}/favicon.svg`,
        "description": "Revolutionary AI-powered LiDAR drone platform transforming energy exploration and geophysical analysis.",
        "foundingDate": "2024",
        "slogan": "Transforming Energy Exploration with AI",
        "knowsAbout": [
            "Geophysics", "AI Seismic Analysis", "LiDAR Drone Technology", "Energy Exploration", "Remote Sensing"
        ],
        "sameAs": [
            "https://www.linkedin.com/company/seismic-ai",
            "https://twitter.com/seismic_ai"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Toronto",
            "addressRegion": "ON",
            "addressCountry": "CA"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "Business Inquiries",
                "email": "hello@seasmic.ai",
                "telephone": "+18001234567",
                "url": `${siteUrl}/#contact`
            }
        ],
        "areaServed": ["US", "CA", "GB", "Global"],
        "serviceType": [
            "AI Data Analytics", "Digital Terrain Mapping", "Geophysical Intelligence", "Energy Exploration"
        ]
    };

    // Article JSON-LD (BlogPosting)
    const articleSchema = type === "article" && articleMeta ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": meta.url
        },
        "headline": meta.title,
        "image": meta.image ? [meta.image] : [],
        "datePublished": articleMeta.publishedTime,
        "dateModified": articleMeta.publishedTime,
        "author": {
            "@type": "Organization",
            "name": articleMeta.author
        },
        "publisher": organizationSchema,
        "description": meta.description
    } : null;

    return (
        <Helmet defer={false} prioritizeSeoTags>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            {meta.keywords && <meta name="keywords" content={meta.keywords} />}

            {/* Canonical URL */}
            <link rel="canonical" href={meta.url} />

            {/* Hreflang Tags (Multi-region targeting - Adjust as needed) */}
            <link rel="alternate" hrefLang="en-us" href={meta.url} />
            <link rel="alternate" hrefLang="en" href={meta.url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={meta.url} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            {meta.image && <meta property="og:image" content={meta.image} />}
            {type === "article" && articleMeta && (
                <>
                    <meta property="article:published_time" content={articleMeta.publishedTime} />
                    <meta property="article:author" content={articleMeta.author} />
                    {articleMeta.tags?.map(tag => (
                        <meta key={tag} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={meta.url} />
            <meta property="twitter:title" content={meta.title} />
            <meta property="twitter:description" content={meta.description} />
            {meta.image && <meta property="twitter:image" content={meta.image} />}

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(type === "article" ? articleSchema : organizationSchema)}
            </script>
        </Helmet>
    );
}
