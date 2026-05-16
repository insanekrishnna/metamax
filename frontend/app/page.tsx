import Image from "next/image";
import { ArrowUpRight, Origami, Search, Snail, SquareDashedMousePointer } from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScorePreview from "./components/ScorePreview";
import UrlScanForm from "./components/UrlScanForm";

const proofItems = [
  {
    label: "SEO",
    detail: "Titles, metadata, canonicals",
    icon: Search,
  },
  {
    label: "Lighthouse",
    detail: "Performance and quality scores",
    icon: Snail,
  },
  {
    label: "Core Web Vitals",
    detail: "LCP, CLS, INP, TTFB",
    icon: Origami,
  },
  {
    label: "Broken Links",
    detail: "Dead links surfaced fast",
    icon: SquareDashedMousePointer,
  },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-transparent text-[#0A0A0F]">
      <SiteBackdrop />
      <Navbar variant="home" />
      <HeroSection />
      <ProofBand />
      <Footer />
    </main>
  );
}

function SiteBackdrop() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-30">
        <Image
          src="/w1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center opacity-100 brightness-105 contrast-110"
        />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(244,246,249,0.34)_48%,rgba(226,231,238,0.72)_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_78%_10%,rgba(255,255,255,0.78),transparent_30rem)]" />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-start gap-15 lg:grid-cols-12">
        <div className="flex flex-col items-start text-left lg:col-span-5">
          <p className="inline-flex items-center gap-2 rounded-md border border-white/60 bg-white/42 px-3 py-1.5 text-xs font-light text-[#4B5563] backdrop-blur-2xl">
            <Image src="/metamaxx.png" alt="" width={16} height={16} className="h-4 w-auto" />
            30+ performance audits
          </p>

          <h1 className="mt-10 max-w-[600px] text-5xl font-light leading-[1.05] text-[#080A16] sm:text-[56px]">
            Websites have hidden bottlenecks
          </h1>
          <h3 className="mt-8 max-w-[560px] text-[28px] font-light leading-tight text-[#4F46E5]">
            Know exactly what to fix
          </h3>
          <p className="mt-6 max-w-[520px] text-[15px] font-light leading-[1.7] text-[#4B5563]">
            Paste URL and get a focused audit for search, performance, web vitals in one clean view.
          </p>

          <div className="mt-10 w-full max-w-[560px]">
            <UrlScanForm variant="hero" buttonLabel="Scan site" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <ScorePreview />
        </div>
      </div>
    </section>
  );
}

function ProofBand() {
  return (
    <section id="proof" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-[1200px] gap-6 sm:grid-cols-2">
        {proofItems.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.label}
              className="group relative rounded-lg border border-white/55 bg-white/42 p-6 backdrop-blur-2xl transition-colors hover:border-white/80"
            >
              <ArrowUpRight className="absolute right-6 top-6 text-[#6B7280]" size={14} strokeWidth={1.8} />
              <div className="flex items-start gap-4 pr-8">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center  text-[#6B7280]">
                  <Icon size={23} strokeWidth={1.5} />
                </span>
                <div className="min-w-0 text-left">
                  <h2 className="text-sm font-normal text-[#0A0A0F]">{item.label}</h2>
                  <p className="mt-3 text-[13px] font-light leading-[1.6] text-[#616674]">{item.detail}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
