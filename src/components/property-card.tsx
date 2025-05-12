import { Card, CardContent } from "@/components/ui/card";

type PropertyCardProps = {
    location: string;
    roomType: string;
    price: string;
};

export const PropertyCard = ({ location, roomType, price }: PropertyCardProps) => (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">{location}</h3>
            <p className="text-sm text-muted-foreground">{roomType}</p>
            <p className="text-primary font-bold">{price} p/m</p>
        </CardContent>
    </Card>
);
