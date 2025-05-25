import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/font.css";
import ProviderReactQuery from "@/react-query/ProviderReactQuery";
import { FavoritesProvider } from "@/context/favoritesContext";
//import NavbarComponent from "@/components/Navbar/NavbarComponent";

export const metadata: Metadata = {
  title: "Marvel Web",
  description: "Challenge para la empresa Prodeman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton+SC&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="open-sans-regular">
        <ProviderReactQuery>
          <FavoritesProvider>{children}</FavoritesProvider>
        </ProviderReactQuery>
      </body>
    </html>
  );
}
