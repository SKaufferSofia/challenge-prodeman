import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/font.css";
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
    <html lang="en" className="light">
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
      <body className="open-sans-regular">{children}</body>
    </html>
  );
}
