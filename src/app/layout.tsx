import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";

const arabicFont = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MS Square | إم إس سكوير للمقاولات والإنشاءات",
  description:
    "MS Square شركة سودانية متخصصة بالمقاولات والإنشاءات، تقدم حلول هندسية وإنشائية متكاملة للقطاعين العام والخاص.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${arabicFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-arabic bg-white text-neutral-dark">
        {children}
      </body>
    </html>
  );
}
