import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Take Home app",
  description: "Take Home app",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Take Home app",
    description: "Take Home app",
    siteName: "Take Home app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>
        <div className="flex flex-col items-center min-h-screen">
          <Header />
          <main className="flex flex-col items-center w-full flex-grow">
            <div className="mt-8 w-11/12 max-w-4xl rounded-md p-6">
              {children}
            </div>
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
