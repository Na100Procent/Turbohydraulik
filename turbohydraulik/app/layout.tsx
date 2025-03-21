import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata: Metadata = {
  keywords:
    "hydraulik, usługi hydrauliczne, awarie, instalacje wodne, TurboHydraulik, pomoc 24/7, naprawa rur, cieknący kran, udrażnianie rur, montaż sanitariatów, pogotowie hydrauliczne, hydraulik Warszawa, pomoc hydrauliczna Warszawa, usługi hydrauliczne Warszawa, hydraulik Kraków, pomoc hydrauliczna Kraków, usługi hydrauliczne Kraków, hydraulik Wrocław, pomoc hydrauliczna Wrocław, usługi hydrauliczne Wrocław, hydraulik Poznań, pomoc hydrauliczna Poznań, usługi hydrauliczne Poznań, hydraulik Gdańsk, pomoc hydrauliczna Gdańsk, usługi hydrauliczne Gdańsk",
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
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" style={{ overflow: "hidden", width: "100%" }}>
      <body style={{ overflowX: "hidden", width: "100%" }}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
