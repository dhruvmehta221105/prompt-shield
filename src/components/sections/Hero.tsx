"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionBackground } from "@/components/ui/section-background";
import { ASSETS, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-bg-dark pt-28 lg:pt-32"
    >
      <SectionBackground />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:gap-8 lg:px-[98px] lg:pb-32">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl lg:text-[5.625rem] lg:tracking-[-0.9px]">
              {SITE.tagline}
            </h1>
            <p className="max-w-xl font-body text-base leading-relaxed text-white/90">
              {SITE.description}
            </p>
          </div>

          <GradientButton className="w-full max-w-xs" asChild>
            <a href="#pricing">Get Started</a>
          </GradientButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:max-w-none"
        >
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
          <Image
            src={ASSETS.heroShield}
            alt="Metallic shield representing AI security protection"
            width={530}
            height={530}
            priority
            className="relative z-10 w-full max-w-[530px] object-contain drop-shadow-[0_0_40px_rgba(62,213,221,0.45)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
