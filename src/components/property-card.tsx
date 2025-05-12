import { Card, CardContent } from "@/components/ui/card";

type PropertyCardProps = {
    location: string;
    roomType: string;
    price: string;
    imageUrl?: string;
};

export const PropertyCard = ({
                                 location,
                                 roomType,
                                 price,
                                 imageUrl,
                             }: PropertyCardProps) => (
    <Card className="hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
        {/* Image Section */}
        <div className="h-40 w-full bg-muted flex items-center justify-center">
            {imageUrl ? (
                <img src={imageUrl} alt={location} className="h-full w-full object-cover" />
            ) : (
                <span className="text-sm text-muted-foreground">Image Coming Soon</span>
            )}
        </div>

        {/* Content */}
        <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">{location}</h3>
            <p className="text-sm text-muted-foreground">{roomType}</p>
            <p className="text-primary font-bold">{price} p/m</p>
        </CardContent>
    </Card>
);
