import { useState, useEffect } from "react";

interface LicenseStatus {
  isVisible: boolean;
  isLicensed: boolean;
  message: string;
}

interface RemoteLicenseConfig {
  siteVisible: boolean;
  licenseValid: boolean;
  message?: string;
  timestamp: string;
  developer: string;
}

/**
 * Custom hook for remote license control and site visibility
 * Implements Akshay Rajeev Nambiar's remote license protection system
 *
 * Control Methods:
 * 1. Remote API endpoint (primary)
 * 2. GitHub raw file (secondary)
 * 3. Local environment (fallback)
 */
export const useLicenseControl = (): LicenseStatus => {
  const [licenseStatus, setLicenseStatus] = useState<LicenseStatus>({
    isVisible: false,
    isLicensed: false,
    message: "Checking license status...",
  });

  useEffect(() => {
    const checkRemoteLicense = async () => {
      try {
        // Method 1: Try remote license control API
        // In development, try localhost test server first
        const isLocalTest =
          import.meta.env.DEV && window.location.hostname === "localhost";
        const remoteLicenseUrl = isLocalTest
          ? "http://localhost:8080/license/seismic-ai"
          : "https://api.akshayrajeev.dev/license/seismic-ai";

        const response = await fetch(remoteLicenseUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Site-ID": "seismic-ai",
            "X-Developer": "akshay-rajeev-nambiar",
          },
          cache: "no-cache",
        });

        if (response.ok) {
          const config: RemoteLicenseConfig = await response.json();

          if (config.developer === "akshay-rajeev-nambiar") {
            setLicenseStatus({
              isVisible: config.siteVisible && config.licenseValid,
              isLicensed: config.licenseValid,
              message:
                config.message ||
                (config.siteVisible
                  ? "Licensed to Seismic AI (Turbo AI collaboration project)"
                  : "Website temporarily unavailable."),
            });

            if (import.meta.env.DEV) {
              console.log("🌐 Remote License Control:", config);
            }
            return;
          }
        }
      } catch (error) {
        console.warn(
          "Remote license check failed, trying GitHub fallback:",
          error
        );
      }

      try {
        // Method 2: GitHub raw file fallback (public repo with license config)
        const githubConfigUrl =
          "https://raw.githubusercontent.com/akshayrajeevnambiar/license-control/main/seismic-ai.json";

        const response = await fetch(githubConfigUrl, {
          cache: "no-cache",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        });

        if (response.ok) {
          const config: RemoteLicenseConfig = await response.json();

          setLicenseStatus({
            isVisible: config.siteVisible && config.licenseValid,
            isLicensed: config.licenseValid,
            message:
              config.message ||
              (config.siteVisible
                ? "Licensed to Seismic AI (Turbo AI collaboration project)"
                : "Website temporarily unavailable."),
          });

          if (import.meta.env.DEV) {
            console.log("📁 GitHub License Control:", config);
          }
          return;
        }
      } catch (error) {
        console.warn(
          "GitHub license check failed, using local fallback:",
          error
        );
      }

      // Method 3: Local environment fallback
      const siteVisible = import.meta.env.VITE_SITE_VISIBLE !== "false";
      const licenseKey = import.meta.env.VITE_LICENSE_KEY;
      const validLicenseKey = "seismic-ai-2025-akshay-nambiar-authorized";
      const isLicensed = licenseKey === validLicenseKey;
      const isDevelopment = import.meta.env.DEV;

      // In development, be more permissive
      const shouldShow = isDevelopment ? true : siteVisible && isLicensed;

      setLicenseStatus({
        isVisible: shouldShow,
        isLicensed: isLicensed || isDevelopment,
        message: shouldShow
          ? "Licensed to Seismic AI (Turbo AI collaboration project)"
          : "Website temporarily unavailable.",
      });

      if (import.meta.env.DEV) {
        console.log("🔧 Local License Fallback:", {
          visible: siteVisible,
          licensed: isLicensed,
          development: isDevelopment,
          final: shouldShow,
        });
      }
    };

    checkRemoteLicense();

    // Check for updates every 30 seconds in production
    const interval = setInterval(checkRemoteLicense, 30000);

    return () => clearInterval(interval);
  }, []);

  return licenseStatus;
};

export default useLicenseControl;
