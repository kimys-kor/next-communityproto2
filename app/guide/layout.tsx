import React from "react";
import Headers from "@/app/components/layouts/headers/Headers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Headers></Headers>
      <div className="min-h-[100vh]">{children}</div>
    </>
  );
}
