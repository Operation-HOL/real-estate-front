'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Bed,
    Bath,
    Maximize,
    MapPin,
    Shield,
    Wifi,
    Droplets,
    Zap,
    Car,
    Trees,
    UtensilsCrossed,
    PocketIcon as Pool,
    ChevronLeft,
    ChevronRight,
    Heart,
    Share2,
    Phone,
    Mail,
    Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { fetchProperty } from "@/lib/data";
import {PropertyCardProps} from "@/lib/types";
import {formatCurrency} from "@/lib/utils";
import {Urbanist} from "next/font/google";
import {GoogleMapsEmbed} from "@next/third-parties/google";
import { use, useEffect, useState} from "react";
import {PropertyPageSkeleton} from "@/components/property-page-skeleton";
import {Navbar} from "@/components/ui/navbar";

const urbanist = Urbanist({
    variable: "--font-urbanist",
    subsets: ["latin"],
});

type PageProps = {
    params: Promise<{propertyId: string}>;
};

export default function PropertyPage({params} : PageProps) {
    const {propertyId}  = use(params);
    const [property, setProperty] = useState<PropertyCardProps | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    console.log("this is the page")

    useEffect(() => {
        const fetchingProperty = async () => {
            try {
                const propertyData = await fetchProperty(propertyId)
                // if (!propertyData) {
                //     setError(true)
                //     return
                // }
                console.log(propertyData)
                setProperty(propertyData)
            } catch (err) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchingProperty().then(r => r)
    }, [propertyId])

    if (loading) {
        return <PropertyPageSkeleton />
    }else{
        console.log(loading)
        console.log(property)
        return (
            <div className="container max-w-7xl mx-auto px-4 py-8">
                <Navbar />
                {/* Property Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold">{property?.title}</h1>
                        <div className="flex items-center mt-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            <p>{property?.suburb}, {property?.city}</p>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                            <h2 className="text-2xl md:text-3xl font-bold text-emerald-600">
                                {property ? formatCurrency(property.monthly_rent) : "R 0" }
                            </h2>
                        <div className="flex gap-2 mt-2">
                            <Button size="sm" variant="outline" className="rounded-full">
                                <Heart className="h-4 w-4 mr-2" />
                                Save
                            </Button>
                            <Button size="sm" variant="outline" className="rounded-full">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Property Images */}
                <div className="relative mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[300px] md:h-[500px]">
                        <div className="md:col-span-2 md:row-span-2 relative rounded-l-lg overflow-hidden">
                            <Image
                                src={property ? property.images[0]: "/placeholder"}
                                alt="Main property view"
                                className="object-cover h-full w-full"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div className="hidden md:block relative">
                            <Image
                                src="/placeholder.svg?height=250&width=300"
                                alt="Kitchen view"
                                className="object-cover h-full w-full"
                                width={300}
                                height={250}
                            />
                        </div>
                        <div className="hidden md:block relative">
                            <Image
                                src="/placeholder.svg?height=250&width=300"
                                alt="Bedroom view"
                                className="object-cover h-full w-full rounded-tr-lg"
                                width={300}
                                height={250}
                            />
                        </div>
                        <div className="hidden md:block relative">
                            <Image
                                src="/placeholder.svg?height=250&width=300"
                                alt="Bathroom view"
                                className="object-cover h-full w-full"
                                width={300}
                                height={250}
                            />
                        </div>
                        <div className="hidden md:block relative">
                            <Image
                                src="/placeholder.svg?height=250&width=300"
                                alt="Garden view"
                                className="object-cover h-full w-full rounded-br-lg"
                                width={300}
                                height={250}
                            />
                        </div>
                    </div>

                    {/* Image Navigation */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-4 pointer-events-none">
                        <Button size="icon" variant="secondary" className="rounded-full pointer-events-auto">
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button size="icon" variant="secondary" className="rounded-full pointer-events-auto">
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>

                    <Button variant="secondary" className="absolute bottom-4 right-4 text-xs">
                        View all 15 photos
                    </Button>
                </div>

                {/* Property Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3  gap-8">
                    <div className="lg:col-span-2">
                        {/* Key Features */}
                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex items-center">
                                <Bed className="h-5 w-5 mr-2 text-emerald-600" />
                                <span>4 Bedrooms</span>
                            </div>
                            <div className="flex items-center">
                                <Bath className="h-5 w-5 mr-2 text-emerald-600" />
                                <span>3 Bathrooms</span>
                            </div>
                            <div className="flex items-center">
                                <Car className="h-5 w-5 mr-2 text-emerald-600" />
                                <span>2 Garages</span>
                            </div>
                            <div className="flex items-center">
                                <Maximize className="h-5 w-5 mr-2 text-emerald-600" />
                                <span>350 m² Living Area</span>
                            </div>
                            <div className="flex items-center">
                                <Trees className="h-5 w-5 mr-2 text-emerald-600" />
                                <span>800 m² Erf Size</span>
                            </div>
                        </div>

                        {/* Tabs */}
                        <Tabs defaultValue="overview" className={`mb-8 ${urbanist.className}`}>
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                                <TabsTrigger value="location">Location</TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="mt-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Property Description</h3>
                                    <p>
                                        {
                                            property?.description.split('\n').map((item, index) => (item))
                                        }
                                    </p>

                                    <h3 className="text-xl font-semibold mt-6">Property Details</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Property Type</span>
                                            <span className="font-medium">{property?.type}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Year Built</span>
                                            <span className="font-medium">2018</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Rates & Taxes</span>
                                            <span className="font-medium">R 3,500 /month</span>
                                        </div>
                                        {/*<div className="flex justify-between">*/}
                                        {/*    <span className="text-muted-foreground">Levy</span>*/}
                                        {/*    <span className="font-medium">R 2,200 /month</span>*/}
                                        {/*</div>*/}
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Furnished</span>
                                            <span className="font-medium">No</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Pet Friendly</span>
                                            <span className="font-medium">Yes</span>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="amenities" className="mt-6">
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold">Property Amenities</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                                        <div className="flex items-center">
                                            <Shield className="h-5 w-5 mr-3 text-emerald-600" />
                                            <span>24-Hour Security</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Pool className="h-5 w-5 mr-3 text-emerald-600" />
                                            <span>Swimming Pool</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Wifi className="h-5 w-5 mr-3 text-emerald-600" />
                                            <span>Fiber Ready</span>
                                        </div>
                                        <div className="flex items-center">
                                            <UtensilsCrossed className="h-5 w-5 mr-3 text-emerald-600" />
                                            <span>Modern Kitchen</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Droplets className="h-5 w-5 mr-3 text-emerald-600" />
                                            <span>Borehole</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Zap className="h-5 w-5 mr-3 text-emerald-600" />
                                            <span>Inverter System</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Shield className="h-5 w-5 mr-3 text-emerald-600" />
                                            <span>Electric Fence</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Shield className="h-5 w-5 mr-3 text-emerald-600" />
                                            <span>Alarm System</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Car className="h-5 w-5 mr-3 text-emerald-600" />
                                            <span>Double Garage</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Trees className="h-5 w-5 mr-3 text-emerald-600" />
                                            <span>Landscaped Garden</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mt-6">Nearby Amenities</h3>
                                    <div className="space-y-2">
                                        <p className="flex items-center">
                                            <span className="font-medium mr-2">Schools:</span>
                                            Crawford College (1.2km), Redhill School (2.5km)
                                        </p>
                                        <p className="flex items-center">
                                            <span className="font-medium mr-2">Shopping:</span>
                                            Sandton City (3km), Benmore Centre (1.5km)
                                        </p>
                                        <p className="flex items-center">
                                            <span className="font-medium mr-2">Medical:</span>
                                            Sandton Mediclinic (2.8km), Morningside Hospital (4km)
                                        </p>
                                        <p className="flex items-center">
                                            <span className="font-medium mr-2">Transport:</span>
                                            Gautrain Station (3.2km), N1 Highway (1km)
                                        </p>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="location" className="mt-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Property Location</h3>
                                    <p className="flex items-center">
                                        <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                                        {property?.suburb}, {property?.city}
                                    </p>

                                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mt-4">
                                        <GoogleMapsEmbed
                                            apiKey={`${process.env.GOOGLE_API_KEY}`} // todo: google api env
                                            height={200}
                                            width="100%"
                                            mode="place"
                                            q="Brooklyn+Bridge,New+York,NY"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="font-semibold mb-2">About the Area</h4>
                                        <p>
                                            Sandton is Johannesburg's premier business and residential district, known for its upscale shopping
                                            centers, fine dining restaurants, and luxury hotels. The area offers excellent schools, world-class
                                            healthcare facilities, and convenient access to major highways and the Gautrain rapid rail system.
                                        </p>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Contact Agent */}
                    <div className="lg:col-span-1">
                        <Card className="p-6">
                            <div className="flex items-center mb-6">
                                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src="/placeholder.svg?height=64&width=64"
                                        alt="Agent photo"
                                        className="object-cover"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Sarah Johnson</h3>
                                    <p className="text-sm text-muted-foreground">Property Specialist</p>
                                    <div className="flex items-center mt-1">
                                        <Badge variant="outline" className="text-xs">
                                            Premier Agent
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <Button variant="default" className="w-full flex items-center justify-center">
                                    <Phone className="h-4 w-4 mr-2" />
                                    Call Agent
                                </Button>
                                <Button variant="outline" className="w-full flex items-center justify-center">
                                    <Mail className="h-4 w-4 mr-2" />
                                    Email Agent
                                </Button>
                                <Button variant="outline" className="w-full flex items-center justify-center">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Schedule Viewing
                                </Button>
                            </div>

                            <Separator className="my-6" />

                            <div>
                                <h3 className="font-semibold mb-4">Request Information</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4">
                                        <input type="text" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md" />
                                        <input type="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md" />
                                        <input type="tel" placeholder="Your Phone" className="w-full px-3 py-2 border rounded-md" />
                                        <textarea
                                            placeholder="I'm interested in this property and would like more information..."
                                            rows={4}
                                            className="w-full px-3 py-2 border rounded-md"
                                        ></textarea>
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Similar Properties */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <Link href="#" key={item} className="group">
                                <Card className="overflow-hidden">
                                    <div className="relative h-48">
                                        <Image
                                            src={`/placeholder.svg?height=200&width=400&text=Property ${item}`}
                                            alt={`Similar property ${item}`}
                                            className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                                            width={400}
                                            height={200}
                                        />
                                        <Badge className="absolute top-2 right-2 bg-emerald-600">For Sale</Badge>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg mb-1">Modern Family Home</h3>
                                        <p className="text-muted-foreground text-sm mb-2">Bryanston, Johannesburg</p>
                                        <p className="font-bold text-emerald-600 mb-2">R {3 + item},850,000</p>
                                        <div className="flex justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                        {item + 2}
                    </span>
                                            <span className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                                                {item + 1}
                    </span>
                                            <span className="flex items-center">
                      <Maximize className="h-4 w-4 mr-1" />
                                                {250 + item * 50} m²
                    </span>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
