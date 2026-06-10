"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionBackground } from "@/components/ui/section-background";
import { SectionHeader } from "@/components/ui/section-header";
import { staggerContainer, fadeInUp } from "@/components/ui/motion";
import { ASSETS, TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-bg-dark py-20 lg:py-28"
    >
      <SectionBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-[98px]">
        <SectionHeader
          eyebrow="Testimonial"
          title="See What Others People Are Saying"
          description="Trusted by AI Builders"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeInUp}>
              <GlassCard
                hover
                className="!border-0 !bg-[rgba(170,170,170,0.06)] h-full"
              >
                <blockquote className="mb-6 font-body text-base leading-relaxed text-white">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-[#484848]">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <cite className="font-heading text-2xl font-semibold not-italic leading-8 text-white">
                      {testimonial.name}
                    </cite>
                    <p className="font-body text-xs leading-4 text-white/80">
                      {testimonial.role}
                    </p>
                    <Image
                      src={ASSETS.stars}
                      alt="5 star rating"
                      width={112}
                      height={16}
                      className="h-4 w-28 object-contain"
                    />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
