import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ApolloWrapper from "@/components/ApolloWrapper";
import "./globals.css";

// Load fonts with CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Amanat | Lost & Found App | AI-Powered Item Recovery",
  description:
    "Amanat is Pakistan’s leading AI-powered lost & found app. Instantly find lost items, return found items, and join a secure, community-driven platform. Download now!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Amanat | Lost & Found App | AI-Powered Item Recovery",
    description:
      "Find lost items or return found items with Amanat – Pakistan’s first AI-powered lost & found app.",
    url: "https://amanat.app", // Update later when your domain is live
    type: "website",
    siteName: "Amanat",
    images: [
      {
        url: "/logo.png", // ✅ image must be placed in /public
        width: 1200,
        height: 630,
        alt: "Amanat App Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanat | Lost & Found App",
    description:
      "Pakistan’s secure community platform to find and return lost items using AI.",
    images: ["/logo.png"]
  },
};

// ✅ Layout wrapper
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
