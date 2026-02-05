import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blubloom Interiors | Global Architecture & Interior Design Studio",
  description: "We design the places where people love to create. A global, multi-disciplinary design studio operating at the intersection of architecture, interiors, sustainability, and digital futures.",
  keywords: "architecture, interior design, sustainable design, digital visualization, luxury interiors, commercial architecture",
  openGraph: {
    title: "Blubloom Interiors | Global Architecture & Interior Design Studio",
    description: "We design the places where people love to create.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
