import { Card, CardContent } from "@/components/ui/card";

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
    bathrooms: number;
    parkingSpaces: number;
    listedAt: string;
};

export const PropertyCard = ({
                                 title, type, monthlyRent,
                             }: PropertyCardProps) => (
    <Card className="hover:shadow-md p-[-10] mx-2 outline-none border-none transition-shadow cursor-pointer overflow-hidden">
        {/* Image Section */}
        <div className="h-60 w-full bg-muted flex items-center justify-center rounded-2xl">
            {(
                <span className="text-sm text-muted-foreground">Image Coming Soon</span>
            )}
        </div>

        {/* Content */}
        <CardContent className="py-[5] space-y-2 border-none">

            <div className="flex w-full mt-[-20] items-center justify-between">
                <h3 className="flex flex-wrap flex-1/3 font-light tracking-tight ">{title}</h3>
                <p className="text-primary font-medium">R{monthlyRent}</p>
            </div>


            <p className="text-sm text-muted-foreground">{type}</p>
            {/*<p className="text-primary font-bold">{monthlyRent} p/m</p>*/}
        </CardContent>
    </Card>
);
