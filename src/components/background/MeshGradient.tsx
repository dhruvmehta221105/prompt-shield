"use client";

import { motion } from "framer-motion";

export default function MeshGradient() {
  return (
    <>
      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-[-220px]
        top-[150px]
        h-[520px]
        w-[520px]
        rounded-full
        bg-cyan-500/20
        blur-[140px]
        "
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          x: [40, -30, 40],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-[-220px]
        top-[120px]
        h-[600px]
        w-[600px]
        rounded-full
        bg-blue-500/20
        blur-[170px]
        "
      />

      {/* Bottom Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-[-220px]
        left-1/2
        -translate-x-1/2
        h-[500px]
        w-[500px]
        rounded-full
        bg-teal-500/10
        blur-[160px]
        "
      />
    </>
  );
}