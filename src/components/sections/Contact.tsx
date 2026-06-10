"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT_ITEMS } from "@/lib/constants";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/5 bg-bg-dark py-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-[98px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="contact-heading"
            className="mb-4 font-heading text-3xl font-semibold text-white sm:text-4xl"
          >
            Get In Touch
          </h2>
          <p className="mb-10 font-body text-base leading-relaxed text-white/80">
            Have questions about securing your AI applications? Our team is here
            to help you choose the right protection plan.
          </p>

          <ul className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
            {CONTACT_ITEMS.map((item) => (
              <li key={item.type}>
                <a
                  href={
                    item.type === "email"
                      ? `mailto:${item.label}`
                      : item.type === "phone"
                        ? `tel:${item.label.replace(/\s/g, "")}`
                        : "#"
                  }
                  className="group flex items-center gap-3 font-body text-base text-white transition-colors hover:text-accent"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden
                    className="size-4 object-contain"
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
