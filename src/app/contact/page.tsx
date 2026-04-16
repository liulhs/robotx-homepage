"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import FooterSection from "@/components/sections/FooterSection";
import { COMPANY } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: COMPANY.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 px-8 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <SectionLabel>Get in Touch</SectionLabel>
            <h1 className="font-[family-name:var(--font-heading)] font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight mt-4 mb-6">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto font-light">
              Ready to explore how RobotX AI can transform your operations?
              Reach out and our team will get back to you.
            </p>
          </div>
        </section>

        {/* Contact methods + form */}
        <section className="pb-24 md:pb-32 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact info */}
              <div>
                <RevealOnScroll>
                  <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl md:text-3xl tracking-tight mb-8">
                    Reach Out Directly
                  </h2>
                </RevealOnScroll>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {CONTACT_METHODS.map((method) => (
                    <motion.a
                      key={method.label}
                      variants={fadeInUp}
                      href={method.href}
                      target={method.label === "Address" ? "_blank" : undefined}
                      rel={
                        method.label === "Address"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-4 p-6 rounded-xl border border-border bg-bg-card/50 hover:border-accent/30 hover:bg-bg-card transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/10 transition-colors">
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-text-muted mb-1">
                          {method.label}
                        </p>
                        <p className="text-white font-medium">{method.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Contact form */}
              <RevealOnScroll delay={0.15}>
                <div className="p-8 md:p-10 rounded-2xl border border-border bg-bg-elevated">
                  <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl tracking-tight mb-8">
                    Send a Message
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF4D00"
                          strokeWidth="2"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <p className="text-white font-medium text-lg">
                        Message sent!
                      </p>
                      <p className="text-text-secondary text-sm mt-2">
                        We&apos;ll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors"
                            placeholder="Company name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                          Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-accent text-white font-[family-name:var(--font-heading)] font-medium tracking-wider uppercase text-sm hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(255,77,0,0.3)] transition-all duration-300 cursor-pointer"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
