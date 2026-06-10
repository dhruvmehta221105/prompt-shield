"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionBackground } from "@/components/ui/section-background";
import { SectionHeader } from "@/components/ui/section-header";
import { MISSION_CARDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="mission" className="relative overflow-hidden bg-bg-dark py-20 lg:py-24">
      <SectionBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-[98px]">
        <SectionHeader
          eyebrow="Our Mission"
          title="Making AI Safer For Everyone"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa."
          className="mb-16"
        />

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {MISSION_CARDS.map((card) => (
            <GlassCard key={card.title} highlighted={card.highlighted}>
              <h3 className="mb-4 font-heading text-2xl font-semibold leading-8 text-white">
                {card.title}
              </h3>
              {card.items ? (
                <ul className="space-y-2 font-body text-base leading-relaxed text-white/90">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-body text-base leading-relaxed text-white/80">
                  {card.description}
                </p>
              )}
            </GlassCard>
          ))}
        </div>

        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <GlassCard highlighted={MISSION_CARDS[activeIndex].highlighted}>
                <h3 className="mb-4 font-heading text-2xl font-semibold leading-8 text-white">
                  {MISSION_CARDS[activeIndex].title}
                </h3>
                {MISSION_CARDS[activeIndex].items ? (
                  <ul className="space-y-2 font-body text-base leading-relaxed text-white/90">
                    {MISSION_CARDS[activeIndex].items!.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-body text-base leading-relaxed text-white/80">
                    {MISSION_CARDS[activeIndex].description}
                  </p>
                )}
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-3" role="tablist" aria-label="Mission cards">
            {MISSION_CARDS.map((card, index) => (
              <button
                key={card.title}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Show ${card.title}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "size-3 rounded-full transition-colors",
                  activeIndex === index ? "bg-accent" : "bg-white/30"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
