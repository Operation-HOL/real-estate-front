import {Geist} from "next/font/google";
import type {Metadata} from "next";


const geistSans = Geist({
    variable: "--font-geist",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "OASES | Rentals",
    description: "Generated by create next app",
};


export default function PropertyLayout( {children}: Readonly<{ children: React.ReactNode}> ) {
  return (
      <main className={`${geistSans.className} antialiased`}>
          {children}
      </main>
  );
}
