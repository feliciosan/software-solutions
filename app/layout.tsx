import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CodaCrew: Technical Partner for Startups, MVPs & SaaS",
    template: "%s | CodaCrew",
  },
  description:
    "We help founders turn ideas into scalable digital products: MVPs, SaaS and AI-powered products built by senior engineers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
