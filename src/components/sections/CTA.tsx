"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionBackground } from "@/components/ui/section-background";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-bg-dark py-16 lg:py-20">
      <SectionBackground />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl rounded-2xl border border-accent/30 bg-card-gradient px-8 py-12 text-center backdrop-blur-[25px] sm:px-12 lg:px-16"
      >
        <p className="mb-2 font-heading text-lg font-semibold uppercase tracking-wide text-accent">
          Ready to Secure Your AI?
        </p>
        <h2 className="mb-4 font-heading text-3xl font-semibold capitalize text-white sm:text-4xl lg:text-5xl">
          Start Protecting Prompts Today
        </h2>
        <p className="mx-auto mb-8 max-w-2xl font-body text-base leading-relaxed text-white/80">
          Join developers and teams who trust PromptShield to block prompt
          injection, jailbreaks, and data leakage before they reach production.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GradientButton asChild>
            <a href="#pricing">Get Started Free</a>
          </GradientButton>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-accent px-6 py-4 font-heading text-lg font-semibold text-accent transition-colors hover:bg-accent/10"
          >
            Talk to Sales
          </a>
        </div>
      </motion.div>
    </section>
  );
}
