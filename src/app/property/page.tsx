'use client'

import { Input } from "@/components/ui/input";
import { PropertyCard } from "@/components/property-card";
import {fetchAllProperties} from "@/lib/data";
import {useEffect, useState} from "react";
import SearchComponent from "@/components/search-component";
import {Separator} from "@/components/ui/separator";
import {MapPin} from "lucide-react";
import {ResidenceTypeCombobox} from "@/components/combobox";
import {InputButtons} from "@/components/inputButtons";
import {Label} from "@/components/ui/label";
import {PriceRange} from "@/components/price-range";
import {PropertyCardSkeleton, Skeleton} from "@/components/ui/skeleton";
import {searchProperties} from "@/lib/server-actions";
import Image from "next/image";

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    /** Getting all properties from the server. */
    useEffect(() => {
        const fetchProperties = async () => {
           const properties = await fetchAllProperties();
           setData(properties);
           console.log("properties fetched")
           setLoading(false);
        }

        fetchProperties().then(null);
    }, []);

    const handleSearch = async (query: string) => {
        try {
            setLoading(true);
            const searchResults = await searchProperties(query);
            console.log(searchResults)
            setData(searchResults); // Ensure we always have an array
        } catch (error) {
            console.log("Error, errored")
            console.error("Search failed:", error);
            setData([]); // Reset data on error
        } finally {
            console.log(loading)
            setLoading(false); // Ensure loading is always set to false
        }
    };

    return (
        <>
            <main className="w-full bg-[#262626] font-[family-name:var(--font-geist-sans)] h-screen mx-auto space-y-6">
                <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Background Image Container */}
                    <div className="fixed inset-0 w-full h-full">
                        <Image src="/gugs.png" alt="hero" fill className="object-cover z-0" priority />
                        <div className="absolute inset-0 backdrop-blur-md bg-black/50 z-10" />
                    </div>

                    {/* Content Wrapper */}
                    <div className="relative z-20 w-full h-full md:pt-20  md:grid-cols-1 max-w-7xl mx-auto px-4">
                        {/*Search Component*/}
                        <main className="flex flex-col w-full items-center mt-20 min-h-screen mx-auto px-4 py-6">
                            {/*<Navbar />*/}
                            {/*This section below is stiff why*/}
                            <section className="flex px-4 sm:px-8 lg:px-20 w-full flex-col text-center" >
                                <div className="flex max-lg:flex-wrap flex-col lg:h-16 font-normal md:flex-row justify-center gap-4">
                                    {/* Filters section */}
                                    <div className="flex flex-col w-full gap-1">
                                        <Label htmlFor="location" className="pl-1 font-normal text-gray-600">Looking for</Label>
                                        <div className="relative w-full">
                                            <Input
                                                id="location"
                                                type="text"
                                                placeholder="e.g. Elitha Park"
                                                className="pr-10 py-5" // Add right padding so the text doesn't overlap with the icon
                                            />
                                            <button className="absolute hover:cursor-pointer right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
                                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                            </button>
                                        </div>
                                    </div>

                                    <PriceRange />
                                    <div className="flex w-full gap-2">
                                        <InputButtons label={"Bedrooms"} />
                                        <ResidenceTypeCombobox />
                                    </div>
                                    {/*<InputButtons label={"Bathrooms"} />*/}
                                    <Separator orientation={"vertical"} />
                                    <SearchComponent onSearch={handleSearch} />
                                </div>
                                <Separator className="max-md:hidden my-4" />
                            </section>

                            {/* Listings */}
                            <section className="flex w-7xl flex-col space-y-4">
                                <aside className="flex items-end my-5 justify-between w-full">
                                    <div>
                                        {
                                            loading ?
                                                <div className="flex flex-col gap-1">
                                                    <Skeleton className="h-10 w-100" />
                                                    <Skeleton className="h-4 w-40" />
                                                </div>
                                                :
                                                <>
                                                    <p className="text-2xl text-white max-sm:text-lg">Residence in Khayelitsha</p>
                                                    <p className="font-light text-muted-foreground text-sm">We found  <span className="text-[#fff] font-medium">{data.length}</span> properties</p>
                                                </>
                                        }
                                    </div>
                                    <p className="max-sm:">Sort By: <span className="text-[#999] font-light text-sm">Default</span></p>
                                </aside>
                                {/*<h3 className="text-lg text-center font-semibold">View our available properties!</h3>*/}
                                <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4">
                                    { loading ?
                                        <>
                                            <PropertyCardSkeleton />
                                            <PropertyCardSkeleton />
                                            <PropertyCardSkeleton />
                                        </> :
                                        data.map((prop: any, i: number) => (
                                            <PropertyCard key={i} {...prop} />
                                        ))}
                                </div>
                            </section>
                        </main>
                    </div>
                </section>
            </main>
            </>
    );
}
