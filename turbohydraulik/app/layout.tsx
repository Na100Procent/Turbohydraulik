import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Head from "next/head";
import NoscriptContent from "./components/shared/NoScriptContent";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://turbohydraulik.pl"),
  title: "TurboHydraulik - Fachowa pomoc hydrauliczna 24/7",
  description:
    "Profesjonalne usługi hydrauliczne dostępne 24/7. Szybka i niezawodna pomoc w nagłych awariach oraz kompleksowe instalacje hydrauliczne.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://turbohydraulik.pl",
    title: "TurboHydraulik - Fachowa pomoc hydrauliczna 24/7",
    description:
      "Profesjonalne usługi hydrauliczne dostępne 24/7. Szybka i niezawodna pomoc w nagłych awariach oraz kompleksowe instalacje hydrauliczne.",
    images: [
      {
        url: "https://turbohydraulik.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TurboHydraulik Logo",
      },
    ],
  },
  robots: "index, follow",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}
    >
      <Head>
        <link rel="canonical" href="https://turbohydraulik.pl/" />
        <meta charSet="UTF-8" />
      </Head>
      <body
        className={inter.className}
        style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}
      >
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        <NoscriptContent />
      </body>
    </html>
  );
}
