"use client";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full justify-center flex-col gap-6">
      <ArrowLeft
        size={18}
        onClick={() => redirect("/")}
        className="cursor-pointer"
      />
      {children}
    </div>
  );
}
