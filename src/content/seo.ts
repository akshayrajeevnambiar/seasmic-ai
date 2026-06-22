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
    },
    blogIndex: {
        title: "Insights & Innovations | Seismic AI Blog",
        description: "Explore the latest insights on AI in oil & gas, spatial computing, predictive analytics, and the future of energy exploration.",
        image: `${baseUrl}/assets/blog/blog_future_oil_gas_1780200870943.png`,
        url: `${baseUrl}/blog`,
        keywords: "seismic ai blog, energy exploration insights, ai in oil and gas, spatial computing blog",
    },
    blogPeakOilDemand: {
        title: "Peak Oil Demand: A Decade Away | Seismic AI",
        description: "Goldman Sachs forecasts peak oil demand is still a decade away. Discover opportunities for drilling innovation and advanced sensor technology.",
        image: `${baseUrl}/assets/blog/blog_peak_oil_demand_1780200815263.png`,
        url: `${baseUrl}/blog/peak-oil-demand`,
        keywords: "peak oil demand, drilling innovation, ai sensor technology, oil and gas future",
    },
    blogIotOilGas: {
        title: "Leveraging IoT in Oil & Gas | Seismic AI",
        description: "Learn how intelligent sensors and IoT are driving efficiency, operational optimization, and predictive maintenance in the energy sector.",
        image: `${baseUrl}/assets/blog/blog_iot_oil_gas_1780200831040.png`,
        url: `${baseUrl}/blog/iot-in-oil-and-gas`,
        keywords: "iot oil and gas, intelligent sensors, predictive maintenance, digital energy",
    },
    blogIndustryOutlook: {
        title: "2026 Oil & Gas Industry Outlook | Seismic AI",
        description: "Explore the accelerating digital transformation of the oil and gas sector in Canada, featuring AI, IoT, and advanced sensor systems.",
        image: `${baseUrl}/assets/blog/blog_industry_outlook_1780200850086.png`,
        url: `${baseUrl}/blog/industry-outlook-2026`,
        keywords: "oil and gas outlook 2026, digital transformation canada, ai energy sector",
    },
    blogFutureOilGas: {
        title: "The Future of Canadian Oil & Gas | Seismic AI",
        description: "Discover the key trends shaping the Canadian oil and gas industry: digital transformation, sustainability, and operational resilience.",
        image: `${baseUrl}/assets/blog/blog_future_oil_gas_1780200870943.png`,
        url: `${baseUrl}/blog/future-canadian-oil-and-gas`,
        keywords: "future canadian oil gas, energy sustainability, digital innovation oil gas",
    },
    blogSpatialComputing: {
        title: "Spatial Computing & Digital Twins in Energy | Seismic AI",
        description: "Unlock new industry advantages with spatial computing, LiDAR, and digital twin simulations for precision oil and gas operations.",
        image: `${baseUrl}/assets/blog/blog_spatial_computing_1780200885096.png`,
        url: `${baseUrl}/blog/spatial-computing-digital-twins`,
        keywords: "spatial computing oil gas, digital twins energy, lidar mapping, 3d simulation",
    },
    whatIsSeismicDataAnalysis: {
        title: "What Is Seismic Data Analysis? A Beginner's Guide | Seismic AI",
        description: "Learn what seismic data analysis is, how it works, and why AI is transforming the way geoscientists explore the subsurface. A complete beginner's guide.",
        image: `${baseUrl}/assets/blog/blog_seismic_data_analysis.png`,
        url: `${baseUrl}/blog/what-is-seismic-data-analysis`,
        keywords: "what is seismic data analysis, seismic data, geophysics, ai subsurface exploration platform, automated seismic data interpretation",
    },
    howAITransformingSeismic: {
        title: "How AI Is Transforming Seismic Interpretation in 2026 | Seismic AI",
        description: "AI is rewriting the rules of seismic interpretation. Discover how machine learning, deep learning, and automation are making geophysical analysis faster, cheaper, and more accurate in 2026.",
        image: `${baseUrl}/assets/blog/blog_ai_transforming_seismic.png`,
        url: `${baseUrl}/blog/how-ai-is-transforming-seismic-interpretation`,
        keywords: "AI seismic interpretation, machine learning seismic interpretation, deep learning seismic, automated seismic data interpretation",
    },
    hiddenCostTraditionalSeismic: {
        title: "The Hidden Cost of Traditional Seismic Exploration | Seismic AI",
        description: "Traditional seismic exploration is costing companies far more than they realise. Discover the hidden costs of legacy workflows and how AI-powered analytics deliver measurable ROI.",
        image: `${baseUrl}/assets/blog/blog_hidden_cost_traditional.png`,
        url: `${baseUrl}/blog/hidden-cost-of-traditional-seismic-exploration`,
        keywords: "reduce exploration drilling costs AI, energy exploration ROI software, traditional seismic survey, digital seismic intelligence platform",
    },
    deepLearningFaultDetection: {
        title: "Deep Learning for Seismic Fault Detection: A Technical Overview | Seismic AI",
        description: "A technical deep-dive into how deep learning and convolutional neural networks are revolutionising seismic fault detection — making it faster, more accurate, and scalable.",
        image: `${baseUrl}/assets/blog/blog_deep_learning_fault.png`,
        url: `${baseUrl}/blog/deep-learning-for-seismic-fault-detection`,
        keywords: "fault detection AI geophysics, deep learning seismic analysis, convolutional neural networks, ai subsurface exploration platform",
    },
    lidarBeamVsTraditionalSeismic: {
        title: "LiDAR Beam Scanning vs. Traditional Seismic Surveys | Seismic AI",
        description: "How does LiDAR beam scanning compare to traditional seismic surveys for energy exploration? A detailed side-by-side breakdown of cost, accuracy, environmental impact, and more.",
        image: `${baseUrl}/assets/blog/blog_lidar_beam_scanning.png`,
        url: `${baseUrl}/blog/lidar-beam-scanning-vs-traditional-seismic-surveys`,
        keywords: "LIDAR vs traditional seismic survey, LIDAR scanning energy exploration, seismic exploration drone technology, uav exploration",
    },
    aiCanadianOilSands: {
        title: "AI in Canadian Oil Sands Exploration: Opportunities & Challenges | Seismic AI",
        description: "Canada's oil sands are one of the world's largest energy resources. Discover how AI-powered seismic analytics and drone technology are transforming exploration and development in Alberta.",
        image: `${baseUrl}/assets/blog/blog_future_oil_gas_1780200870943.png`,
        url: `${baseUrl}/blog/ai-in-canadian-oil-sands-exploration`,
        keywords: "oil sands geophysics AI Canada, seismic exploration software Canada, oil sands Alberta, drone lidar seismic",
    },
    howSeismicAiDelivers10xFaster: {
        title: "How SeismicAI Delivers 10x Faster Interpretation | Seismic AI",
        description: "SeismicAI delivers 10x faster seismic interpretation with 95% accuracy. Explore how the platform's AI-powered analytics transform exploration timelines and ROI for E&P companies.",
        image: `${baseUrl}/assets/blog/blog_ai_transforming_seismic.png`,
        url: `${baseUrl}/blog/how-seismicai-delivers-10x-faster-interpretation`,
        keywords: "AI reduce seismic interpretation time, AI geophysics case study, digital seismic intelligence platform, automated seismic interpretation",
    },
    seismicIntelligenceSaudiArabia: {
        title: "Seismic Intelligence for Saudi Arabia's Oil & Gas Sector | Seismic AI",
        description: "Saudi Arabia's energy transformation demands cutting-edge geophysical technology. Discover how AI-powered seismic intelligence is supporting Saudi Vision 2030 and the future of GCC energy exploration.",
        image: `${baseUrl}/assets/blog/blog_industry_outlook_1780200850086.png`,
        url: `${baseUrl}/blog/seismic-intelligence-for-saudi-arabias-oil-and-gas-sector`,
        keywords: "AI exploration technology Saudi Arabia, seismic software Middle East, saudi vision 2030, gcc energy exploration",
    },
    benefitsAiGeophysicalAnalytics: {
        title: "Benefits of AI-Powered Geophysical Analytics | Seismic AI",
        description: "AI-powered geophysical analytics deliver measurable benefits for E&P companies — from reduced exploration risk to faster time-to-production. A comprehensive breakdown for decision-makers.",
        image: `${baseUrl}/assets/blog/blog_seismic_data_analysis.png`,
        url: `${baseUrl}/blog/benefits-of-ai-powered-geophysical-analytics`,
        keywords: "benefits of AI in oil gas exploration, upstream oil gas AI analytics, reduce exploration risk, automated seismic interpretation",
    },
    cloudBasedSeismicInterpretation: {
        title: "Cloud-Based Seismic Interpretation: Why the Industry Is Shifting | Seismic AI",
        description: "The geophysics industry is moving to cloud-based seismic interpretation platforms. Discover the drivers, benefits, and considerations for E&P companies making the transition.",
        image: `${baseUrl}/assets/blog/blog_iot_oil_gas_1780200831040.png`,
        url: `${baseUrl}/blog/cloud-based-seismic-interpretation`,
        keywords: "cloud seismic interpretation platform, geophysics SaaS platform, automated seismic data interpretation, cloud-native geophysics",
    },
    seismicAiSmallGeophysicsTeams: {
        title: "SeismicAI for Small Geophysics Teams: Maximum ROI | Seismic AI",
        description: "Small geophysics teams can now access enterprise-grade AI interpretation capabilities without the enterprise price tag. Discover how SeismicAI delivers maximum ROI for lean exploration teams.",
        image: `${baseUrl}/assets/blog/blog_spatial_computing_1780200885096.png`,
        url: `${baseUrl}/blog/seismicai-for-small-geophysics-teams`,
        keywords: "best geophysics software for small companies, subsurface analytics SaaS, small geophysics teams, pay-as-you-use geophysics",
    }
};
