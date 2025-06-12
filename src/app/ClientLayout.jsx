"use client";

import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.includes("admin");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {!isAdminRoute && <Header />}
      {children}
      {!isAdminRoute && <Footer />}
    </Suspense>
  );
}