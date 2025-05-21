'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { PropertyCard } from "@/components/property-card";
import {fetchAllProperties} from "@/lib/data";
import {useEffect, useState} from "react";
import {searchProperties} from "@/lib/server-actions";
import SearchComponent from "@/components/search-component";

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
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
            {/* Header */}
            <header className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-primary">Caprock</h1>
                <div className="space-x-2">
                    <Button variant="outline">Login</Button>
                    <Button>Signup</Button>
                </div>
            </header>

            {/* Hero */}
            <section className="text-center space-y-4">
                <h2 className="text-xl font-semibold">Find Your Place!</h2>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    {/*<SearchComponent onSearch={handleSearch} />*/}
                    <Input placeholder="Search.." />
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Room Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="single">Single</SelectItem>
                            <SelectItem value="sharing">Sharing</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input placeholder="Price Range" />
                </div>
            </section>

            {/* Listings */}
            <section className="space-y-4">
                <h3 className="text-lg text-center font-semibold">View our available properties!</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    { loading ? <p>Loading...</p> :
                        data.map((prop: any, i: number) => (
                        <PropertyCard key={i} {...prop} />
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-muted-foreground py-6 text-sm">
                © 2025 Caprock, Inc.
            </footer>
        </div>
    );
}
