import { Card, CardContent } from "@/components/ui/card";
import {Bath, BedDouble, Heart, Wifi} from "lucide-react";
import Link from "next/link";
import {Bookmark, HeartRounded} from "untitledui-js-base";
import React from "react";
import {formatCurrency} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {PropertyCardProps} from "@/lib/types";



export const PropertyCard = ({
                                 title, monthly_rent, bathrooms, suburb, id, images, city
                             }: PropertyCardProps) => {
    const [liked, setLiked] = React.useState(false);
    const [bookmark, setBookmark] = React.useState(false);

    return (
        <Card className="relative bg-[#FAF0E6]  p-[-5] pb-2 mx-2 outline-none border-none  cursor-pointer overflow-hidden">

            {/* Heart Icon */}
            <button onClick={() => {setLiked(!liked);}}
                    className="absolute bg-gray-100 opacity-70 p-2 rounded-full top-4 right-3 z-10">
                <HeartRounded size="20" className={`${ liked ? 'fill-red-500 text-red-500' : 'text-black ' } transition-colors cursor-pointer`}/>
            </button>


            {/* Image Section */}
            <Link href={`/property/${id}`}>
                <div className="h-75 w-full bg-muted relative items-center justify-center rounded-2xl">
                    <Badge
                            className="absolute p-2 bg-green-900 rounded-full bottom-2 right-3 z-10">
                        4 Units
                    </Badge>
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
                    <h3 className="flex flex-wrap text-[#444] flex-1/3 font-normal">{title}</h3>
                    <p className="text-green-800 font-normal">{formatCurrency(monthly_rent)}</p>
                </div>


                <p className="text-sm font-normal tracking-wide text-[#999]">{suburb}, {city}</p>
                <div className="flex gap-3 text-sm text-gray-950 items-center">
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
