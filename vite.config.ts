import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optimize JSX runtime
      jsxRuntime: "automatic",
    }),
  ],
  assetsInclude: ["**/*.mp4", "**/*.mov", "**/*.webm"],

  // Optimize build output
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    target: "esnext",

    rollupOptions: {
      output: {
        // Improved chunk splitting for better caching
        manualChunks: {
          // Core React libraries
          "react-vendor": ["react", "react-dom", "react-router-dom"],

          // Animation libraries
          animation: ["framer-motion"],

          // Icon libraries
          icons: ["lucide-react"],

          // Utilities
          utils: ["react-helmet-async"],
        },

        // Optimize chunk naming for caching
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },

      // External dependencies that shouldn't be bundled
      external: [],
    },

    chunkSizeWarningLimit: 1000,

    // Enable CSS code splitting
    cssCodeSplit: true,

    // Optimize assets
    assetsInlineLimit: 4096, // 4KB
  },

  // Development server optimization
  server: {
    port: 3000,
    host: true,
  },

  preview: {
    port: 3000,
    host: true,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
      "react-helmet-async",
    ],
    // Exclude large dependencies from pre-bundling
    exclude: [],
  },

  // Enable esbuild for faster builds
  esbuild: {
    // Remove console logs in production
    drop: ["console", "debugger"],
    legalComments: "none",
  },
});
