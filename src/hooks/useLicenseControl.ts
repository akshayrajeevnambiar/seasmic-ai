import { useState, useEffect } from "react";

interface LicenseStatus {
  isVisible: boolean;
  isLicensed: boolean;
  message: string;
}

/**
 * Simple flag-based license control
 * © 2025 Akshay Rajeev Nambiar. All Rights Reserved.
 *
 * Control via environment variables:
 * - VITE_SITE_VISIBLE: true/false to show/hide site
 * - VITE_LICENSE_VALID: true/false to authorize access
 */
export const useLicenseControl = (): LicenseStatus => {
  const [licenseStatus, setLicenseStatus] = useState<LicenseStatus>({
    isVisible: false,
    isLicensed: false,
    message: "Checking license...",
  });

  useEffect(() => {
    // Simple flag-based control
    const siteVisible = import.meta.env.VITE_SITE_VISIBLE !== "false";
    const licenseValid = import.meta.env.VITE_LICENSE_VALID !== "false";
    const isDevelopment = import.meta.env.DEV;

    // In development, be permissive
    const shouldShow = isDevelopment || (siteVisible && licenseValid);

    let message = "Licensed to Seismic AI (Turbo AI collaboration project)";

    if (!siteVisible) {
      message = "Website temporarily unavailable.";
    } else if (!licenseValid) {
      message = "Unauthorized access. Valid license required.";
    }

    setLicenseStatus({
      isVisible: shouldShow,
      isLicensed: licenseValid || isDevelopment,
      message: message,
    });

    if (import.meta.env.DEV) {
      console.log("� Simple License Control:", {
        visible: siteVisible,
        licensed: licenseValid,
        development: isDevelopment,
        final: shouldShow,
      });
    }
  }, []);

  return licenseStatus;

  return licenseStatus;
};

export default useLicenseControl;
