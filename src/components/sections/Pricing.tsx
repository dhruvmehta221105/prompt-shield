"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionBackground } from "@/components/ui/section-background";
import { SectionHeader } from "@/components/ui/section-header";
import { staggerContainer, fadeInUp } from "@/components/ui/motion";
import { ASSETS, PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-bg-dark py-20 lg:py-28">
      <SectionBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-[98px]">
        <SectionHeader
          eyebrow="Pricing Table"
          title="Choose The Right Protection Plan"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid items-end gap-8 lg:grid-cols-3"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.article
              key={plan.id}
              variants={fadeInUp}
              className={cn(
                "flex flex-col gap-6 rounded-2xl border border-white/5 bg-card-gradient p-8 backdrop-blur-[25px]",
                plan.featured && "-mt-4 border-2 border-[#0a767b] lg:scale-105"
              )}
            >
              <p className="text-center font-heading text-lg font-semibold text-accent">
                {plan.name}
              </p>
              <p className="text-center font-body text-base leading-relaxed text-white/80">
                {plan.description}
              </p>

              <div
                className={cn(
                  "flex items-center justify-center gap-4 rounded-full px-6 py-4",
                  plan.featured
                    ? "bg-gradient-to-br from-[#0a767b] to-[#00a7d6] drop-shadow-[0_0_10px_rgba(62,213,221,0.56)]"
                    : "bg-bg-dark"
                )}
              >
                <span className="font-heading text-[2.375rem] font-semibold leading-[3rem] text-white">
                  {plan.price}
                </span>
                <span className="h-5 w-px bg-white/30" aria-hidden />
                <span className="font-heading text-base font-semibold text-white">
                  {plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Image
                      src={ASSETS.checkIcon}
                      alt=""
                      width={24}
                      height={24}
                      aria-hidden
                      className="size-6 shrink-0"
                    />
                    <span className="font-body text-base leading-relaxed text-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <GradientButton fullWidth asChild>
                <a href="#contact">{plan.cta}</a>
              </GradientButton>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
