import { Card, CardContent } from "@/components/ui/card";
import {Bath, BedDouble, Heart} from "lucide-react";
import Link from "next/link";

type PropertyCardProps = {
    id: string;
    title: string;
    description: string;
    type: string;
    monthlyRent: number;
    city: string;
    suburb: string;
    status: string;
    bedrooms: number;
    images: string[];
    bathrooms: number;
    parkingSpaces: number;
    listedAt: string;
};

export const PropertyCard = ({
                                 title, monthlyRent, bathrooms, suburb, id
                             }: PropertyCardProps) => (
    <Card className="hover:shadow-md p-[-5] mx-2 outline-none border-none transition-shadow cursor-pointer overflow-hidden">

        {/* Heart Icon */}
        <div className="absolute top-4 right-4 z-10">
            <Heart className="h-6 w-6 text-white hover:text-red-500 transition-colors cursor-pointer" />
        </div>


        {/* Image Section */}
        <Link href={`/property/${id}`}>
            <div className="h-60 w-full bg-muted flex items-center justify-center rounded-2xl">
                {(
                    <span className="text-sm text-muted-foreground">Image Coming Soon</span>
                )}
            </div>
        </Link>

        {/* Content */}
        <CardContent className="grid grid-rows-3 py-[4] gap-[-4] space-y-3 border-none">

            <div className="flex w-full mt-[-20] items-center justify-between">
                <h3 className="flex flex-wrap flex-1/3 font-light tracking-tight ">{title}</h3>
                <p className="text-primary font-medium">R{monthlyRent}</p>
            </div>


            <p className="text-sm text-muted-foreground">{suburb}</p>
            <div className="flex gap-2 text-gray-950 items-center">
                <span className="flex border p-1 gap-0.5 rounded-md">
                    {bathrooms}<Bath size={20} />
                </span>
                <span className="flex border p-1 gap-0.5 rounded-md">
                    {bathrooms}<BedDouble size={20} />
                </span>
            </div>
        </CardContent>
    </Card>
);
