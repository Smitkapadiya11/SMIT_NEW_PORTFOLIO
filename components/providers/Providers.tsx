"use client";

import { Toaster } from "sonner";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      {children}
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#0c0c1e",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            color: "#f8fafc",
          },
        }}
      />
    </SmoothScrollProvider>
  );
}
