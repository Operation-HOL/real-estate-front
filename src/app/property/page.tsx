'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { PropertyCard } from "@/components/property-card";
import {fetchAllProperties} from "@/lib/data";
import {useEffect, useState} from "react";
import {searchProperties} from "@/lib/server-actions";
import SearchComponent from "@/components/search-component";
import {SearchLG} from "untitledui-js-base";
import {Separator} from "@/components/ui/separator";
import {MapPin} from "lucide-react";
import {ResidenceTypeCombobox} from "@/components/combobox";
import {InputButtons} from "@/components/inputButtons";
import {Label} from "@/components/ui/label";
import {PriceRange} from "@/components/price-range";

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Getting all properties from the server.
    useEffect(() => {
        const fetchProperties = async () => {
           const properties = await fetchAllProperties();
           setData(properties);
           setLoading(false);
        }

        fetchProperties().then(null);
    }, []);

    // const handleSearch = async (query: string) => {
    //     setLoading(true);
    //     const searchResults = await searchProperties(query).then(null);
    //     console.log(searchResults);
    //     setData(searchResults.content);
    //     setLoading(false);
    // };


    return (
        <main className="flex flex-col max-w-7xl h-screen mx-auto px-4 py-6 space-y-6">
            {/* Header */}
            <header className="flex justify-between items-center">
                <h1 className="text-3xl font-normal text-primary">OASES</h1>
                <div className="space-x-2">
                    <Button variant="outline">Login</Button>
                    <Button>Signup</Button>
                </div>
            </header>

            <section className="text-center space-y-4">
                {/*<h2 className="text-xl font-semibold">Find Your Place!</h2>*/}
                <div className="flex flex-col md:flex-row h-16 justify-center gap-4">
                    {/* Filters section */}
                    <div className="flex flex-col w-full gap-1">
                        <Label htmlFor="location" className="pl-1 text-gray-600">Location</Label>
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
                    <InputButtons label={"Bedrooms"} />
                    <ResidenceTypeCombobox />
                    <InputButtons label={"Bathrooms"} />
                    <Separator orientation={"vertical"} />
                    <SearchComponent />
                </div>
                <Separator className="my-4" />
            </section>

            {/* Listings */}
            <section className="space-y-4">
                {/*<h3 className="text-lg text-center font-semibold">View our available properties!</h3>*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    { loading ? <p>Loading...</p> :
                        data.map((prop: any, i: number) => (
                        <PropertyCard key={i} {...prop} />
                    ))}
                </div>
            </section>
        </main>
    );
}
