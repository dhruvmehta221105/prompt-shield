"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import {
  CONTACT_ITEMS,
  FOOTER_LINKS,
  SITE,
  SOCIAL_LINKS,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bg-dark px-6 py-16 lg:px-[98px] lg:py-24">
      

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr] lg:gap-10">
        <div className="flex flex-col gap-8">
          <Logo />
          <p className="max-w-xs font-body text-base leading-relaxed text-white/80">
            Protecting AI applications from prompt injections, jailbreaks, and
            data leakage through intelligent prompt security.
          </p>
          <div className="flex gap-8">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="rounded-lg border border-white p-2 transition-colors hover:border-accent hover:bg-accent/10"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden
                  className="size-6 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-10 font-heading text-lg font-semibold text-white">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-4">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body text-base leading-relaxed text-white/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-10 font-heading text-lg font-semibold text-white">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4">
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
                  className="flex items-center gap-2 font-body text-base leading-relaxed text-white/80 transition-colors hover:text-accent"
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
        </div>

        <div>
          <h3 className="mb-10 font-heading text-lg font-semibold text-white">
            Newsletter
          </h3>
          <form
            className="flex flex-col gap-3 rounded-3xl bg-white p-3 sm:relative sm:h-20 sm:flex-row sm:items-center sm:overflow-hidden sm:px-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 py-3 font-body text-base text-paragraph placeholder:text-paragraph/50 focus:outline-none sm:px-0 sm:py-0"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-3xl bg-gradient-to-br from-[#0a767b] to-[#00a7d6] px-6 py-4 font-heading text-lg font-bold text-white sm:absolute sm:right-2 sm:text-xl"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 text-center">
        <p className="font-body text-sm text-white/50">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
