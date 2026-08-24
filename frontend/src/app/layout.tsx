import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";
import { SiteFooter } from "@/features/navigation/components/SiteFooter";
import { SiteHeader } from "@/features/navigation/components/SiteHeader";
import AppProviders from "@/lib/providers/AppProviders";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
});

const recoleta = localFont({
  variable: "--font-recoleta",
  display: "swap",
  src: [
    {
      path: "../fonts/recoleta/recoletaRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/recoleta/recoletaSemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iyke.dev"),
  title: {
    default: "Obasi Ikechukwu — Software Engineer",
    template: "%s — Obasi Ikechukwu",
  },
  description:
    "Software engineer building ambitious products with dependable systems.",
  applicationName: "DevIyke Labs",
  authors: [{ name: "Obasi Ikechukwu" }],
  creator: "Obasi Ikechukwu",
  openGraph: {
    type: "website",
    title: "Obasi Ikechukwu — Software Engineer",
    description:
      "Ambitious products, dependable systems, and thoughtful software engineering.",
    siteName: "DevIyke Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obasi Ikechukwu — Software Engineer",
    description:
      "Ambitious products, dependable systems, and thoughtful software engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${recoleta.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <AppProviders>
          <SkipLink />
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
