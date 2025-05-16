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
    <Card className="hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
        {/* Image Section */}
        <div className="h-40 w-full bg-muted flex items-center justify-center">
            {(
                <span className="text-sm text-muted-foreground">Image Coming Soon</span>
            )}
        </div>

        {/* Content */}
        <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{type}</p>
            <p className="text-primary font-bold">{monthlyRent} p/m</p>
        </CardContent>
    </Card>
);
