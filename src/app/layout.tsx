import type {Metadata, Viewport} from "next";
import "./globals.css";
import {geistSans} from "@/lib/utils";
import ResponsiveHeader from "@/components/responsiive-header";


export const metadata: Metadata = {
  title: "OASES | Rentals",
  description: "By Oases Developers",
};

export const viewport: Viewport = {
    colorScheme: "dark",
    themeColor: "#000"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} flex flex-col justify-between m-0 antialiased`}
      >
      <ResponsiveHeader />
        {children}
      </body>
    </html>
  );
}
