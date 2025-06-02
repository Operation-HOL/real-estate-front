import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import {SearchLG} from "untitledui-js-base";
import CustomLocationSearch from "@/components/hero/custom-location-search";

export default function HeroSearchComponent() {
    return (
        <section className="relative w-full min-h-[600px] flex-col  row-start-3 flex items-center justify-center px-4 py-12">
            {/* Background overlay */}
            {/*<div className="absolute inset-0 bg-black/40" />*/}
            <div className="text-white gap-3">
                <h2 className="text-xl md:text-5xl font-thin tracking-[7px] text-[#fff]">Find your
                    <span className="text-orange-500"> next</span> home.
                </h2>
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <Card className="w-full border-none shadow-none max-w-5xl mx-auto rounded-4xl bg-transparent">
                    <CardContent className="p-6 border-none">
                        <form className="space-y-6">
                            <CustomLocationSearch />
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
