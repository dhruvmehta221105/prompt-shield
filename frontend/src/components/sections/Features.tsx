"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { staggerContainer, fadeInUp } from "@/components/ui/motion";
import { ASSETS, CORE_FEATURES, ENTERPRISE_FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <>
      <section id="features" className="relative overflow-hidden py-20 lg:py-24">
        

        <div className="relative mx-auto max-w-7xl px-6 lg:px-[98px]">
          <SectionHeader
            eyebrow="Our Features"
            title="Protect Every AI Interaction"
            description="Advanced security mechanisms designed specifically for modern AI applications."
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {CORE_FEATURES.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp} className="relative pt-10">
                <div
  className="
    absolute left-1/2 top-0 z-10 flex size-20
    -translate-x-1/2 items-center justify-center
    rounded-full border border-white/20
    bg-bg-dark
    transition-all duration-300
    group-hover:border-white
  "
>
                  <Image
                    src={feature.icon}
                    alt=""
                    width={48}
                    height={48}
                    aria-hidden
                    className="size-12 object-contain"
                  />
                </div>
                <GlassCard
                  highlighted={false}
                  className=" group pt-14 text-center"
                >
                  <h3 className="mb-4 font-heading text-2xl font-semibold leading-8 text-white">
                    {feature.title}
                  </h3>
                  <p className="font-body text-base leading-relaxed text-white/80">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg-dark py-20 lg:py-28">
        

        <div className="relative mx-auto max-w-7xl px-6 lg:px-[98px]">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto w-full max-w-[521px] overflow-hidden rounded-2xl bg-white"
            >
              <Image
                src={ASSETS.featuresDeveloper}
                alt="Developer reviewing code on a monitor"
                width={521}
                height={880}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 521px"
              />
            </motion.div>

            <div className="flex flex-col gap-10">
              <SectionHeader
                align="left"
                eyebrow="Why PromptShield?"
                title="Enterprise-Grade AI Security Features"
                description="Everything you need to secure AI-powered products and applications."
              />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="grid gap-6 sm:grid-cols-2"
              >
                {ENTERPRISE_FEATURES.map((feature) => (
                <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group relative pt-10"
              >
                    <GlassCard className="h-full !p-6">
                      <Image
                        src={feature.icon}
                        alt=""
                        width={64}
                        height={64}
                        aria-hidden
                        className="mb-4 size-16 object-contain"
                      />
                      <h3 className="mb-4 font-heading text-2xl font-semibold leading-8 text-white">
                        {feature.title}
                      </h3>
                      <p className="font-body text-base leading-relaxed text-white/80">
                        {feature.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
