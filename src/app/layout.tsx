import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "RobotX AI | One Brain. Any Robot. Any Task.",
  description:
    "RobotX AI develops body-agnostic physical AI systems that work across different robotic platforms and real-world tasks. Security, Firefighting, Industrial, and Mobile Manipulation.",
  keywords: [
    "robotics",
    "AI",
    "physical AI",
    "body-agnostic",
    "humanoid robots",
    "industrial automation",
  ],
  openGraph: {
    title: "RobotX AI | One Brain. Any Robot. Any Task.",
    description:
      "Leading the frontier of Physical AI with deployments across Security, Firefighting, Industrial, and Mobile Manipulation.",
    type: "website",
    url: "https://usrobotx.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
