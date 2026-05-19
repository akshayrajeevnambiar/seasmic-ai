export interface PageSEO {
    title: string;
    description: string;
    image?: string;
    url?: string;
    keywords?: string;
}

// Adjust the fallback URL to match the new project's domain
const baseUrl = import.meta.env.VITE_BASE_URL || "https://seismicai.ca";

export const seoConfig: Record<string, PageSEO> = {
    home: {
        title: "Seismic AI | Intelligent Energy Exploration & Geophysical Analytics",
        description: "Seismic AI provides AI-powered geophysical intelligence, LiDAR drone technology, and remote sensing solutions to modernize energy exploration and environmental assessment.",
        image: `${baseUrl}/assets/hero_geophysical_intelligence.png`,
        url: baseUrl,
        keywords: "seismic ai, energy exploration, geophysical intelligence, lidar drone technology, remote sensing, ai data analytics",
    },
    privacyPolicy: {
        title: "Privacy Policy | Seismic AI",
        description: "Read the Seismic AI Privacy Policy to understand how we collect, use, and protect your data across our platforms and services.",
        image: `${baseUrl}/assets/hero_geophysical_intelligence.png`,
        url: `${baseUrl}/privacy-policy`,
        keywords: "privacy policy, data protection, seismic ai privacy",
    },
    termsOfUse: {
        title: "Terms of Use | Seismic AI",
        description: "Review the Terms of Use for accessing and using Seismic AI's website, platform, and geophysical intelligence services.",
        image: `${baseUrl}/assets/hero_geophysical_intelligence.png`,
        url: `${baseUrl}/terms-of-use`,
        keywords: "terms of use, terms and conditions, seismic ai terms",
    },
    ethics: {
        title: "Ethics & AI Transparency | Seismic AI",
        description: "Discover Seismic AI's commitment to ethical AI development, algorithmic transparency, and responsible energy exploration practices.",
        image: `${baseUrl}/assets/hero_geophysical_intelligence.png`,
        url: `${baseUrl}/ethics-ai-transparency`,
        keywords: "ai ethics, ai transparency, responsible ai, ethical energy exploration",
    },
    seismicSurveying: {
        title: "AI-Powered Seismic Surveying | Seismic AI",
        description: "Accelerate subsurface exploration with our intelligent seismic surveying solutions, combining rapid data acquisition with predictive geophysical analytics.",
        image: `${baseUrl}/assets/hero_seismic_surveying.png`,
        url: `${baseUrl}/services/seismic-surveying`,
        keywords: "seismic surveying, subsurface exploration, geophysical analytics, ai seismic interpretation",
    },
    lidarDrone: {
        title: "LiDAR Drone Technology | Seismic AI",
        description: "Deploy advanced LiDAR drone technology for high-resolution aerial mapping, digital terrain modeling, and rapid geospatial data acquisition.",
        image: `${baseUrl}/assets/hero_lidar_drone.png`,
        url: `${baseUrl}/services/lidar-drone-technology`,
        keywords: "lidar drone, aerial mapping, drone surveying, digital terrain modeling, uav exploration",
    },
    aiDataAnalytics: {
        title: "AI Data Analytics for Exploration | Seismic AI",
        description: "Transform exploration data into actionable intelligence with our AI data analytics platform. Automate seismic interpretation and geophysical analysis.",
        image: `${baseUrl}/assets/hero_ai_analytics.png`,
        url: `${baseUrl}/services/ai-data-analytics`,
        keywords: "ai data analytics, seismic interpretation, exploration analytics, predictive geophysics",
    },
    digitalTerrainMapping: {
        title: "Digital Terrain Mapping & Intelligence | Seismic AI",
        description: "Enhance operational visibility with precise digital terrain mapping. We generate 3D spatial models and geospatial intelligence for energy operations.",
        image: `${baseUrl}/assets/feature_digital_terrain.png`,
        url: `${baseUrl}/services/digital-terrain-mapping`,
        keywords: "digital terrain mapping, 3D spatial models, terrain intelligence, geospatial mapping",
    },
    energyExploration: {
        title: "Intelligent Energy Exploration Solutions | Seismic AI",
        description: "Modernize resource development with our intelligent energy exploration platform. Reduce operational risk through real-time predictive analytics and aerial surveying.",
        image: `${baseUrl}/assets/hero_energy_exploration.png`,
        url: `${baseUrl}/services/energy-exploration`,
        keywords: "energy exploration, resource development, exploration platform, sustainable exploration",
    },
    environmentalImpact: {
        title: "Environmental Impact Assessment | Seismic AI",
        description: "Automate environmental monitoring and compliance reporting with our AI-powered environmental impact assessment and remote sensing solutions.",
        image: `${baseUrl}/assets/hero_environmental_impact.png`,
        url: `${baseUrl}/services/environmental-impact-assessment`,
        keywords: "environmental impact assessment, ecological monitoring, esg compliance, sustainable energy",
    },
    remoteSensing: {
        title: "Remote Sensing Solutions | Seismic AI",
        description: "Gain real-time geospatial intelligence with our remote sensing solutions. Monitor large-scale environments and infrastructure with aerial sensors and AI.",
        image: `${baseUrl}/assets/hero_remote_sensing.png`,
        url: `${baseUrl}/services/remote-sensing-solutions`,
        keywords: "remote sensing, geospatial intelligence, aerial sensors, infrastructure monitoring",
    },
    geophysicalIntelligence: {
        title: "Geophysical Intelligence Platform | Seismic AI",
        description: "Optimize drilling and exploration strategies with our comprehensive geophysical intelligence platform, integrating seismic, spatial, and terrain data.",
        image: `${baseUrl}/assets/hero_geophysical_intelligence.png`,
        url: `${baseUrl}/services/geophysical-intelligence`,
        keywords: "geophysical intelligence, subsurface visibility, geological interpretation, exploration strategy",
    }
};
