"use client";

import { DemoModeProvider } from "@/context/DemoModeContext";

export default function RegisterLayout({
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
