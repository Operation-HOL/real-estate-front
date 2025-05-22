import { Card, CardContent } from "@/components/ui/card";
import {Bath, BedDouble, Heart, Wifi} from "lucide-react";
import Link from "next/link";
import {Bookmark, HeartRounded} from "untitledui-js-base";
import React from "react";
import {formatCurrency} from "@/lib/utils";

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
                                 title, monthlyRent, bathrooms, suburb, id, images, city
                             }: PropertyCardProps) => {
    const [liked, setLiked] = React.useState(false);
    const [bookmark, setBookmark] = React.useState(false);

    return (
        <Card className="relative p-[-5] mx-2 outline-none border-none shadow-none cursor-pointer overflow-hidden">

            {/* Heart Icon */}
            <button onClick={() => {setLiked(!liked);}}
                    className="absolute bg-gray-100 opacity-70 p-2 rounded-full top-4 right-4 z-10">
                <HeartRounded size="20" className={`${ liked ? 'fill-red-500 text-red-500' : 'text-black ' } transition-colors cursor-pointer`}/>
            </button>


            {/* Image Section */}
            <Link href={`/property/${id}`}>
                <div className="h-60 w-full bg-muted flex items-center justify-center rounded-2xl">

                    {
                        (images.length > 0) ? (
                                <img src={images[0]} alt={suburb} className="h-full w-full object-cover rounded-2xl"/>
                            ) :
                            (<span className="text-sm text-muted-foreground">Image Coming Soon</span>)}
                </div>
            </Link>

            {/* Content */}
            <CardContent className="flex px-2 pt-1 gap-2 flex-col border-none">

                <div className="flex w-full mt-[-20] items-center justify-between">
                    <h3 className="flex flex-wrap text-[#333] flex-1/3 font-normal">{title}</h3>
                    <p className="text-primary font-normal">{formatCurrency(monthlyRent)}</p>
                </div>


                <p className="text-sm font-medium tracking-wide text-[#444]">{suburb}, {city}</p>
                <div className="flex gap-2 text-sm text-gray-950 items-center">
                    <span className="flex items-center border p-1 gap-1 rounded-md">
                        {bathrooms}<Bath size={15}/>
                    </span>
                    <span className="flex items-center border p-1 gap-1 rounded-md">
                        {bathrooms}<BedDouble size={15}/>
                    </span>
                    <button onClick={()=>{setBookmark(!bookmark)}} className="flex justify-end flex-1 gap-2">
                        <Bookmark className={`${ bookmark ? `fill-black` : `fill-none` } transition-all animate-in text-gray-black`} size={'24'} />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}
