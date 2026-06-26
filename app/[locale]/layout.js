import { Jost } from "next/font/google";
import ClientLayout from "../client-layout";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} className={jost.variable}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
