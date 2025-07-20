"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BannerStatistics() {
  const [counts, setCounts] = useState({
    clients: 0,
    fees: 0,
    assets: 0,
  });

  useEffect(() => {
    const targetCounts = {
      clients: 30000,
      fees: 0,
      assets: 100,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      setCounts({
        clients: Math.floor(targetCounts.clients * easeProgress),
        fees: targetCounts.fees,
        assets: Math.floor(targetCounts.assets * easeProgress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
      }}
      className="grid grid-cols-1 gap-1"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="bg-black/40 rounded-tr-4xl p-6 text-center relative overflow-hidden"
      >
        {/* Subtle light effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
        <div className="relative z-10">
          <motion.div
            className="text-4xl font-bold text-white"
            key={counts.clients}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {counts.clients.toLocaleString()}
          </motion.div>
          <div className="text-white/90">Clients</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="bg-black/40 p-6 text-center relative overflow-hidden"
      >
        {/* Subtle light effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
        <div className="relative z-10">
          <motion.div
            className="text-4xl font-bold text-white"
            key={counts.fees}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {counts.fees}%
          </motion.div>
          <div className="text-white/90">Fees</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="bg-black/40 rounded-bl-4xl p-6 text-center relative overflow-hidden"
      >
        {/* Subtle light effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
        <div className="relative z-10">
          <motion.div
            className="text-4xl font-bold text-white"
            key={counts.assets}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {counts.assets} million
          </motion.div>
          <div className="text-white/90">Assets under management</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
