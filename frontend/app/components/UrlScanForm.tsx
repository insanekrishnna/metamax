"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type UrlScanFormProps = {
  initialValue?: string;
  className?: string;
  buttonLabel?: string;
  compact?: boolean;
  showProtocolPrefix?: boolean;
  variant?: "default" | "hero";
  onSubmitUrl?: (url: string) => void;
};

function cleanUrlInput(value: string) {
  return value.trim().replace(/^https?:\/\//i, "").replace(/\/+$/g, "");
}

export function toHttpsUrl(value: string) {
  return `https://${cleanUrlInput(value)}`;
}

export default function UrlScanForm({
  initialValue = "",
  className = "",
  buttonLabel = "SCAN",
  compact = false,
  showProtocolPrefix = true,
  variant = "default",
  onSubmitUrl,
}: UrlScanFormProps) {
  const router = useRouter();
  const [value, setValue] = useState(cleanUrlInput(initialValue));
  const isHero = variant === "hero";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleaned = cleanUrlInput(value);
    if (!cleaned) return;

    const targetUrl = toHttpsUrl(cleaned);
    if (onSubmitUrl) {
      onSubmitUrl(targetUrl);
      return;
    }

    router.push(`/scan?url=${encodeURIComponent(targetUrl)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isHero
          ? `flex w-full flex-col gap-2 rounded-lg border border-white/60 bg-white/62 p-1.5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:h-[50px] sm:flex-row sm:items-center ${className}`
          : `flex w-full items-center rounded-lg border border-white/60 bg-white/58 p-1 backdrop-blur-2xl ${className}`
      }
    >
      {showProtocolPrefix && (
        <span
          className={
            isHero
              ? "hidden shrink-0 border-r border-[rgba(10,10,15,0.08)] px-4 py-3 text-[13px] font-light text-[#4F46E5] sm:inline-flex"
              : `shrink-0 border-r border-[rgba(10,10,15,0.08)] font-light text-[#4F46E5] ${
                  compact ? "px-4 py-2.5 text-[13px]" : "px-5 py-4 text-[13px]"
                }`
          }
        >
          https://
        </span>
      )}
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="example.com"
        aria-label="Website domain"
        className={
          isHero
            ? "min-w-0 flex-1 rounded-md bg-white/42 px-4 py-3 text-[13px] font-light text-[#0A0A0F] outline-none placeholder:text-[#9CA3AF] sm:bg-transparent"
            : `min-w-0 flex-1 bg-transparent text-[#0A0A0F] outline-none placeholder:text-[#9CA3AF] ${
                compact ? "px-4 py-2.5 text-[13px]" : "px-5 py-4 text-[13px]"
              }`
        }
      />
      <button
        type="submit"
        className={
          isHero
            ? "inline-flex h-9 w-full shrink-0 items-center justify-center gap-2 rounded-md bg-[#090A12] px-5 text-[13px] font-normal text-white transition hover:bg-[#1A1B24] sm:w-auto"
            : `inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#090A12] font-normal text-white transition hover:bg-[#1A1B24] ${
                compact ? "px-4 py-2.5 text-[13px]" : "px-5 py-3 text-[13px] sm:px-6"
              }`
        }
      >
        {buttonLabel}
        <ArrowRight size={14} strokeWidth={1.8} />
      </button>
    </form>
  );
}
