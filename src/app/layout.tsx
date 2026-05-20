import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UKGraduate | The Premier Career Launchpad for UK Graduates",
  description: "Connect with elite partner universities, explore high-salary graduate schemes, and fast-track your path to corporate and technological leadership in the UK.",
  keywords: ["UK Graduate Jobs", "University Careers", "Graduate Schemes", "UK Jobs", "Entry Level Tech Jobs", "Finance Graduates"],
  authors: [{ name: "UKGraduate Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-900 text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}

