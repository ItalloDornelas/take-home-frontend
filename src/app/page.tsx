import { Tasks } from "@/components/tasks";
import { Metadata } from "next";

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

export default function Home() {
  return <Tasks />;
}
