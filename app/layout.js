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
    "Casa vacanze di lusso vicino a Padova e Venezia con piscina privata, campo da tennis e WiFi. Affitta con vista sui Colli Euganei. Ideale per relax e family holiday in Veneto.",
  openGraph: {
    title: "Oasi Dolce Vita — Casa vacanze nei Colli Euganei",
    description:
      "Casa vacanze di lusso vicino a Padova e Venezia con piscina privata, campo da tennis e WiFi. Affitta con vista sui Colli Euganei. Ideale per relax e family holiday in Veneto.",
    locale: "it_IT",
    siteName: "Oasi Dolce Vita",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oasi Dolce Vita — Casa vacanze nei Colli Euganei",
    description:
      "Casa vacanze di lusso vicino a Padova e Venezia con piscina privata, campo da tennis e WiFi.",
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