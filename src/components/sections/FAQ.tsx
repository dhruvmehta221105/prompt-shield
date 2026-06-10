"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/ui/section-background";
import { SectionHeader } from "@/components/ui/section-header";

const FAQ_ITEMS = [
  {
    question: "What is prompt injection?",
    answer:
      "Prompt injection is an attack where malicious instructions are embedded in user input to manipulate an AI model's behavior, bypass safety rules, or extract sensitive data.",
  },
  {
    question: "How does PromptShield integrate with my stack?",
    answer:
      "PromptShield provides developer-friendly APIs that work with OpenAI, Claude, Gemini, and open-source models. Integration typically takes less than an hour.",
  },
  {
    question: "Can I use PromptShield for free?",
    answer:
      "Yes. The Basic plan includes 100 daily requests, basic threat detection, and full API access at no cost.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-bg-dark py-20 lg:py-24">
      <SectionBackground />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-[98px]">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about securing your AI applications with PromptShield."
          className="mb-12"
        />

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/5 bg-card-gradient p-6 backdrop-blur-[25px]"
            >
              <summary className="cursor-pointer list-none font-heading text-lg font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
              </summary>
              <p className="mt-4 font-body text-base leading-relaxed text-white/80">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
