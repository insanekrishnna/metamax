"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type NavbarProps = {
  children?: ReactNode;
  variant?: "default" | "home";
};

const tools = [
  "SEO Audit",
  "Performance",
  "Core Web Vitals",
  "Lighthouse",
  "Metadata",
  "Broken Links",
  "Robots.txt",
  "Sitemap",
  "Accessibility",
  "Best Practices",
];

export default function Navbar({ children, variant = "default" }: NavbarProps) {
  const isHome = variant === "home";

  return (
    <header
      className={
        isHome
          ? "absolute left-0 top-0 z-50 w-full border-b border-white/55 bg-white/32 px-4 shadow-[0_1px_0_rgba(255,255,255,0.38),0_18px_60px_rgba(15,23,42,0.05)] backdrop-blur-[30px] sm:px-6"
          : "sticky top-0 z-50 border-b border-white/55 bg-white/34 shadow-[0_1px_0_rgba(255,255,255,0.38),0_18px_60px_rgba(15,23,42,0.05)] backdrop-blur-[30px]"
      }
    >
      <div className={`mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between gap-4 ${isHome ? "" : "px-5 sm:px-8"}`}>
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image src="/metamaxx.png" alt="Metamax logo" width={28} height={28} className="h-6 w-auto" priority />
          <span className="text-[15px] font-medium text-[#0A0A0F]">Metamax</span>
        </Link>

        {children ? (
          <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
            <div className="hidden min-w-0 flex-1 justify-end md:flex">{children}</div>
            <ToolsDropdown />
          </div>
        ) : (
          <nav className="flex items-center gap-2 sm:gap-3" aria-label={isHome ? "Homepage navigation" : "Main navigation"}>
            <ToolsDropdown />
            <Link
              href="/scan"
              className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md bg-[#090A12] px-4 text-[13px] font-normal text-white transition hover:bg-[#1A1B24]"
            >
              Scan
              <ArrowRight size={14} strokeWidth={1.8} />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

function ToolsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={dropdownRef} className="relative shrink-0">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-white/55 bg-white/26 px-3 text-[13px] font-light text-[#0A0A0F] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-[28px] transition hover:bg-white/44"
      >
        Tools
        <ChevronDown size={14} strokeWidth={1.8} className={`transition ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-3 w-[336px] max-w-[calc(100vw-2rem)] rounded-lg border border-white/70 bg-[rgba(255,255,255,0.97)] p-2.5 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur-[34px]">
          <div className="grid grid-cols-2 gap-2.5">
            {tools.map((tool) => (
              <Link
                key={tool}
                href="/scan"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-white/0 px-3 py-3 text-[13px] font-light text-[#111827] transition hover:border-white/70 hover:bg-white/58"
              >
                {tool}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
