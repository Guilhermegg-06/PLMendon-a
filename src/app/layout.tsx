import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteFont = Manrope({
  variable: "--font-site",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "wdth"],
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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08206b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${siteFont.variable} ${displayFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
