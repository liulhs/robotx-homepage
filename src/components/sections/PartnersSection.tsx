"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import { MEDIA } from "@/lib/media";

export default function PartnersSection() {
  // Duplicate logos for seamless infinite scroll
  const logos = [...MEDIA.partners, ...MEDIA.partners];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-16">
        <div className="text-center">
          <SectionLabel>Partnerships</SectionLabel>
          <RevealOnScroll>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-5xl tracking-tight mt-6">
              Trusted by{" "}
              <span className="text-accent">some of the best.</span>
            </h2>
          </RevealOnScroll>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />

        <div className="flex animate-ticker">
          {logos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 mx-10 md:mx-16 flex items-center justify-center h-16"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second ticker going opposite direction */}
      <div className="relative mt-12">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />

        <div
          className="flex animate-ticker"
          style={{ animationDirection: "reverse", animationDuration: "45s" }}
        >
          {[...logos].reverse().map((logo, i) => (
            <div
              key={`${logo.name}-rev-${i}`}
              className="flex-shrink-0 mx-10 md:mx-16 flex items-center justify-center h-16"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-30 hover:opacity-80 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
