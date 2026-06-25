import "./globals.css";

import ClientLayout from "./client-layout";

import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata = {
  title: {
    default: "Oasi Dolce Vita — Casa vacanze nei Colli Euganei",
    template: "%s | Oasi Dolce Vita",
  },
  description:
    "Casa vacanze di lusso a Lozzo Atestino sui Colli Euganei con piscina privata, campo da tennis e WiFi. A mezzora da Venezia, Verona e Vicenza, 2 ore dalle Dolomiti. Ideale per relax e family holiday in Veneto.",
  openGraph: {
    title: "Oasi Dolce Vita — Casa vacanze nei Colli Euganei",
    description:
      "Casa vacanze di lusso a Lozzo Atestino sui Colli Euganei con piscina privata, campo da tennis e WiFi. A mezzora da Venezia, Verona e Vicenza, 2 ore dalle Dolomiti.",
    locale: "it_IT",
    siteName: "Oasi Dolce Vita",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oasi Dolce Vita — Casa vacanze nei Colli Euganei",
    description:
      "Casa vacanze di lusso sui Colli Euganei con piscina privata, campo da tennis e WiFi. A mezzora da Venezia e Verona.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={jost.variable}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}