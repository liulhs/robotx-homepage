export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#platform" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOLUTIONS = [
  {
    title: "Security & Inspection",
    description:
      "High-precision autonomous sensing and inspection capabilities. Our robots navigate complex environments to provide real-time situational awareness and threat detection.",
    icon: "shield",
  },
  {
    title: "Firefighting & Rescue",
    description:
      "Remote operation and robotic assistance for life-saving missions. Deploy autonomous systems in hazardous environments where human entry is too dangerous.",
    icon: "flame",
  },
  {
    title: "Industrial Automation",
    description:
      "Robotic automation for warehousing, logistics, and smart manufacturing. Flexible deployment across environments with minimal reconfiguration needed.",
    icon: "factory",
  },
] as const;

export const COMPANY = {
  name: "RobotX AI",
  tagline: "One Brain. Any robot. Any task.",
  phone: "+1 810-519-0881",
  address: "17901 Von Karman Ave, Ste 420, Irvine, CA 92614",
  email: "info@usrobotx.com",
  website: "https://usrobotx.com",
} as const;
