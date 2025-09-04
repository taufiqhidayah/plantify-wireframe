"use client";

import { DemoModeProvider } from "@/context/DemoModeContext";

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DemoModeProvider>
      {children}
    </DemoModeProvider>
  );
}
