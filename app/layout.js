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
    default: "Oasi Dolce Vita — Villa con piscina privata e campo da tennis sui Colli Euganei | Lozzo Atestino",
    template: "%s | Oasi Dolce Vita",
  },
  description:
    "Affitta Oasi Dolce Vita, villa con piscina privata, campo da tennis e WiFi a Lozzo Atestino sui Colli Euganei. Ideale per vacanza relax, famiglia e smart working in Veneto. A 30 minuti da Venezia, Verona e Vicenza, 2 ore dalle Dolomiti. Prenota ora il tuo soggiorno.",
  openGraph: {
    title: "Oasi Dolce Vita — Villa con piscina privata sui Colli Euganei",
    description:
      "Affitta villa con piscina privata, campo da tennis e WiFi a Lozzo Atestino sui Colli Euganei. Ideale per relax e famiglia. A 30 min da Venezia, Verona e Vicenza.",
    locale: "it_IT",
    siteName: "Oasi Dolce Vita",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oasi Dolce Vita — Villa con piscina privata Colli Euganei",
    description:
      "Affitta villa con piscina privata, campo da tennis e WiFi sui Colli Euganei. A 30 min da Venezia e Verona.",
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