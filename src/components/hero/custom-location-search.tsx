"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import {MapPin} from "lucide-react";
import {SearchLG} from "untitledui-js-base";

type Suggestion = {
    description: string;
    place_id: string;
};

export default function CustomLocationSearch() {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const autocompleteServiceRef = useRef<google.maps.places.AutocompleteService | null>(null);
    const placesServiceRef = useRef<google.maps.places.PlacesService | null>(null);
    const mapDivRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (scriptLoaded && window.google) {
            autocompleteServiceRef.current = new window.google.maps.places.AutocompleteService();
            if (mapDivRef.current) {
                placesServiceRef.current = new window.google.maps.places.PlacesService(mapDivRef.current);
            }
        }
    }, [scriptLoaded]);

    useEffect(() => {
        const fetchPredictions = () => {
            if (!autocompleteServiceRef.current || input.length < 2) return;

            autocompleteServiceRef.current.getPlacePredictions(
                {
                    input,
                    componentRestrictions: { country: "ZA" },
                    types: ["geocode"], // can also use ["(cities)"]
                },
                (predictions, status) => {
                    if (
                        status === window.google.maps.places.PlacesServiceStatus.OK &&
                        predictions
                    ) {
                        setSuggestions(
                            predictions.map((p) => ({
                                description: p.description,
                                place_id: p.place_id,
                            }))
                        );
                    } else {
                        setSuggestions([]);
                    }
                }
            );
        };

        const debounce = setTimeout(fetchPredictions, 300);
        return () => clearTimeout(debounce);
    }, [input]);

    const handleSelect = (placeId: string) => {
        if (!placesServiceRef.current) return;

        placesServiceRef.current.getDetails(
            {
                placeId,
                fields: ["name", "formatted_address", "geometry", "address_components"],
            },
            (place, status) => {
                if (
                    status === window.google.maps.places.PlacesServiceStatus.OK &&
                    place &&
                    place.geometry
                ) {
                    console.log("📍 Selected place:", {
                        name: place.name,
                        address: place.formatted_address,
                        lat: place.geometry.location?.lat(),
                        lng: place.geometry.location?.lng(),
                    });
                    setInput(place.formatted_address || "");
                    setSuggestions([]);
                }
            }
        );
    };

    return (
        <>
            {/* Google Maps API */}
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
                strategy="afterInteractive"
                onLoad={() => setScriptLoaded(true)}
            />

            {/* Hidden div for PlacesService */}
            <div ref={mapDivRef} style={{ display: "none" }} />

            {/* Input & Suggestions */}
            <div className="relative max-w-6xl mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="lg:col-span-4">
                        <div className="relative">
                            <MapPin size={25} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                            <input
                                id="location"
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Enter city, neighborhood, or address"
                                className="rounded-4xl text-xl w-full border  text-white p-10 pl-10 h-12"
                            />
                            <div className="absolute top-0 h-full right-1">
                                <button className=" flex items-center self-center gap-3 p-5 rounded-3xl m-2  bg-white ">
                                    Search <SearchLG className="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {suggestions.length > 0 && (
                    <ul className="absolute top-full left-0 right-0 z-50 bg-white border mt-1 rounded shadow">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(suggestion.place_id)}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                            >
                                {suggestion.description}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}
