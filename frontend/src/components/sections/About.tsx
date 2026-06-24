"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { ASSETS } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden  py-20 lg:py-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-[98px]">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative h-[440px] w-full max-w-[383px]">
            <div className="absolute left-0 top-0 z-10 h-[440px] w-[383px] overflow-hidden rounded-2xl bg-white">
              <Image
                src={ASSETS.aboutTyping}
                alt="Hands typing on a glowing keyboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 383px"
              />
            </div>
            <div className="absolute left-16 top-40 z-20 h-[440px] w-[393px] overflow-hidden rounded-2xl bg-white shadow-2xl">
              <Image
                src={ASSETS.aboutData}
                alt="Abstract blue digital data streams"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 393px"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <SectionHeader
            align="left"
            eyebrow="About Us"
            title="Building Trust In AI Through Prompt Security"
            description="As AI applications become more powerful, they also become vulnerable to prompt injection attacks, jailbreak attempts, sensitive data leaks, and harmful instructions."
          />

          <p className="font-body text-base leading-relaxed text-white/90">
            PromptShield acts as an intelligent security layer between users and
            Large Language Models, analyzing every prompt before it reaches your
            AI system and blocking potentially dangerous inputs in real time.
          </p>

          <GradientButton className="w-full max-w-xs" asChild>
            <a href="#features">Learn More</a>
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
