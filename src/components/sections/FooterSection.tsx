"use client";

import { MEDIA } from "@/lib/media";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function FooterSection() {
  return (
    <footer id="contact" className="relative border-t border-border">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MEDIA.logo}
              alt={COMPANY.name}
              className="h-8 brightness-0 invert mb-6"
            />
            <p className="text-text-secondary text-base leading-relaxed max-w-sm mb-8 font-light">
              Robot intelligence built for the real world. One brain that adapts
              to any robot, any task, any environment.
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wider uppercase rounded-full bg-accent text-white hover:bg-accent-hover transition-all duration-300 font-[family-name:var(--font-heading)]"
            >
              Contact Us
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Solutions column */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-sm tracking-widest uppercase mb-6 text-white">
              Solutions
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Security & Inspection", href: "/solutions" },
                { name: "Firefighting & Rescue", href: "/solutions" },
                { name: "Industrial Automation", href: "/solutions" },
                { name: "Mobile Manipulation", href: "/products" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-sm tracking-widest uppercase mb-6 text-white">
              Company
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                >
                  {COMPANY.phone}
                </a>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-text-muted leading-relaxed">
                {COMPANY.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {COMPANY.name} Inc. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
