import { motion } from "framer-motion";
import seismicaLogo from "../assets/seismica-logo.png";

interface OfflineScreenProps {
  message: string;
}

/**
 * Professional offline screen for license control
 * © 2025 Akshay Rajeev Nambiar. All Rights Reserved.
 */
const OfflineScreen: React.FC<OfflineScreenProps> = ({ message }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-md mx-auto"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src={seismicaLogo}
            alt="Seismic AI Logo"
            className="w-20 h-20 object-contain mx-auto opacity-60"
          />
        </motion.div>

        {/* Main Message */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-space font-medium text-white mb-4"
        >
          {message}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/60 font-inter text-sm mb-8"
        >
          Please contact the administrator for access.
        </motion.p>

        {/* Pulsing indicator */}
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 bg-white/40 rounded-full mx-auto"
        />

        {/* Copyright Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <p className="text-white/30 font-inter text-xs">
            © 2025 Akshay Rajeev Nambiar. All Rights Reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OfflineScreen;
