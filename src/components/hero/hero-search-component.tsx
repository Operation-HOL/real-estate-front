import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import {SearchLG} from "untitledui-js-base";

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
                            {/* Main search row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="lg:col-span-4">
                                    <div className="relative">
                                        <MapPin size={25} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                                        <input
                                            id="location"
                                            type="text"
                                            placeholder="Enter city, neighborhood, or address"
                                            className="rounded-4xl text-xl w-full border  text-white p-10 pl-10 h-12"
                                        />
                                        <div className="absolute top-0 h-full right-1">
                                            <button className=" flex items-center self-center gap-3 p-5 rounded-3xl m-2  bg-white">
                                                Search <SearchLG className="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="text-white col-span-2">*/}
                                {/*    <Select>*/}
                                {/*        <SelectTrigger className="h-12 p-8 outline-white text-lg w-full rounded-3xl">*/}
                                {/*            <SelectValue defaultValue="Property type" placeholder="Property type"/>*/}
                                {/*        </SelectTrigger>*/}
                                {/*        <SelectContent className="border-none text-white bg-transparent rounded-xl">*/}
                                {/*            <SelectItem value="any" className="text-lg">Property type</SelectItem>*/}
                                {/*            <SelectItem value="house" className="text-lg">House</SelectItem>*/}
                                {/*            <SelectItem value="apartment" className="text-lg">Apartment</SelectItem>*/}
                                {/*            <SelectItem value="condo" className="text-lg">Condo</SelectItem>*/}
                                {/*            <SelectItem value="townhouse" className="text-lg">Townhouse</SelectItem>*/}
                                {/*            <SelectItem value="commercial" className="text-lg">Commercial</SelectItem>*/}
                                {/*        </SelectContent>*/}
                                {/*    </Select>*/}
                                {/*</div>*/}
                                {/*<div className="text-white col-span-2">*/}
                                {/*    <Select>*/}
                                {/*        <SelectTrigger className="h-12 p-8 text-lg w-full rounded-3xl">*/}
                                {/*            <SelectValue placeholder="Buy or Rent" />*/}
                                {/*        </SelectTrigger>*/}
                                {/*        <SelectContent className="border-none text-white bg-transparent rounded-xl">*/}
                                {/*            <SelectItem value="buy" className="text-lg">Buy</SelectItem>*/}
                                {/*            <SelectItem value="rent" className="text-lg">Rent</SelectItem>*/}
                                {/*        </SelectContent>*/}
                                {/*    </Select>*/}
                                {/*</div>*/}
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
