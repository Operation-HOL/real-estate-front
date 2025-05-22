import {Geist_Mono} from "next/font/google";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function PropertyLayout( {children}: Readonly<{ children: React.ReactNode}> ) {
  return (
      <main className={`${geistMono.className} antialiased`}>
          {children}
      </main>
  );
}
