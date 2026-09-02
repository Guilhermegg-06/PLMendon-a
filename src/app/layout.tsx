import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: "Paulinho Mendonça",
  title: {
    default: "Paulinho Mendonça | Alagoas",
    template: "%s | Paulinho Mendonça",
  },
  description:
    "Conheça a trajetória e os canais oficiais de Paulinho Mendonça em Alagoas.",
  keywords: [
    "Paulinho Mendonça",
    "Alagoas",
    "deputado estadual",
    "campanha",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Paulinho Mendonça",
    title: "Paulinho Mendonça | Alagoas",
    description:
      "Conheça a trajetória e os canais oficiais de Paulinho Mendonça em Alagoas.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Paulinho Mendonça, candidato a deputado estadual por Alagoas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulinho Mendonça | Alagoas",
    description:
      "Conheça a trajetória e os canais oficiais de Paulinho Mendonça em Alagoas.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#070c21" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
