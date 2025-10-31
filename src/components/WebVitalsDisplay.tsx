import React, { useEffect, useState } from "react";
import { usePerformanceMonitoring } from "../hooks/usePerformance";

interface WebVitalsDisplayProps {
  show?: boolean;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const WebVitalsDisplay: React.FC<WebVitalsDisplayProps> = ({
  show = false,
  position = "bottom-right",
}) => {
  const metrics = usePerformanceMonitoring(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (import.meta.env.DEV && show) {
      setIsVisible(true);
    }
  }, [show]);

  // Only show if metrics are available and in development
  if (!isVisible || !import.meta.env.DEV) {
    return null;
  }

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  const formatTime = (time: number | undefined) => {
    if (!time) return "N/A";
    return `${Math.round(time)}ms`;
  };

  const getScoreColor = (
    value: number | undefined,
    thresholds: [number, number]
  ) => {
    if (!value) return "text-gray-400";
    if (value <= thresholds[0]) return "text-green-400";
    if (value <= thresholds[1]) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div
      className={`fixed ${positionClasses[position]} z-50 bg-black/90 border border-gray-700 rounded-lg p-3 text-xs font-mono min-w-48`}
    >
      <div className="text-white font-semibold mb-2 flex items-center">
        ⚡ Web Vitals
        <button
          onClick={() => setIsVisible(false)}
          className="ml-auto text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span
            className={getScoreColor(
              metrics.firstContentfulPaint,
              [1800, 3000]
            )}
          >
            {formatTime(metrics.firstContentfulPaint)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span
            className={getScoreColor(
              metrics.largestContentfulPaint,
              [2500, 4000]
            )}
          >
            {formatTime(metrics.largestContentfulPaint)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">FID:</span>
          <span className={getScoreColor(metrics.firstInputDelay, [100, 300])}>
            {formatTime(metrics.firstInputDelay)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span
            className={getScoreColor(
              (metrics.cumulativeLayoutShift || 0) * 1000,
              [100, 250]
            )}
          >
            {metrics.cumulativeLayoutShift
              ? metrics.cumulativeLayoutShift.toFixed(3)
              : "N/A"}
          </span>
        </div>

        <div className="border-t border-gray-600 mt-2 pt-2">
          <div className="flex justify-between">
            <span className="text-gray-300">DCL:</span>
            <span className="text-blue-400">
              {formatTime(metrics.domContentLoaded)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-300">Load:</span>
            <span className="text-blue-400">
              {formatTime(metrics.loadComplete)}
            </span>
          </div>
        </div>
      </div>

      <div className="text-gray-500 text-xs mt-2">
        <div>🟢 Good 🟡 Needs Improvement 🔴 Poor</div>
      </div>
    </div>
  );
};

export default WebVitalsDisplay;
