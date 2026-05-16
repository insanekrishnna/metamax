import { Suspense } from "react";
import ScanClient from "../components/ScanClient";

export default function ScanPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(226,231,238,0.74)),url('/w1.jpg')] bg-cover bg-center" />}>
      <ScanClient />
    </Suspense>
  );
}
