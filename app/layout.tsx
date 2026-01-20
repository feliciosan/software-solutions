import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Performance & Architecture | Premium Services",
  description:
    "High-level frontend for products that can't fail. Improve performance, architecture and technical clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
