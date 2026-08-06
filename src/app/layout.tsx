import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OldNewspaper = localFont({
  src: "../../public/fonts/OldNewspaperTypes.ttf",
  variable: "--font-newspaper-local",
  display: "swap"
});

const Autography = localFont({
  src: "../../public/fonts/Autography.otf",
  variable: "--font-autography-local",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Diana Fernandez",
  description: "Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${Autography.variable} ${OldNewspaper.variable} h-full antialiased scroll-smooth scroll-pt-10 selection:bg-primary selection:text-background`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
