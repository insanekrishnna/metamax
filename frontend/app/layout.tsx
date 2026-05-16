import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Metamax | Free SEO + Performance Audits",
  description: "Analyze any website and get SEO, Lighthouse, and Core Web Vitals checks in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#eef0f6] text-[#0A0A0F]">{children}</body>
    </html>
  );
}
