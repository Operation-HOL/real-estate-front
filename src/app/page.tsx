import Image from "next/image";
import HeroSearchComponent from "@/components/hero/hero-search-component";
export default async function Home() {
  return (
      <main className="w-full bg-[#262626] font-[family-name:var(--font-geist-sans)] h-screen mx-auto space-y-6">
          <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
              {/* Background Image Container */}
              <div className="absolute inset-0 w-full h-full">
                  <Image src="/gugs.png" alt="hero" fill className="object-cover z-0" priority />
                  <div className="absolute inset-0 backdrop-blur-md bg-black/50 z-10" />
              </div>

              {/* Content Wrapper */}
              <div className="relative z-20 w-full h-full md:pt-20  md:grid-cols-1 max-w-7xl mx-auto px-4">
                  {/*Search Component*/}
                  <HeroSearchComponent />

                  {/* CTA Button */}

              </div>
          </section>
      </main>
  );
}
