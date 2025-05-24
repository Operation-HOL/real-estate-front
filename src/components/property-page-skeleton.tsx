import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/ui/header"

export function PropertyPageSkeleton() {
    return (
        <div className="container max-w-7xl mx-auto px-4 py-8">
            <Header />

            {/* Property Header Skeleton */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div className="flex-1">
                    <Skeleton className="h-8 w-3/4 mb-2" />
                    <div className="flex items-center mt-2">
                        <Skeleton className="h-4 w-4 mr-1" />
                        <Skeleton className="h-4 w-48" />
                    </div>
                </div>
                <div className="mt-4 md:mt-0">
                    <Skeleton className="h-10 w-40 mb-2" />
                    <div className="flex gap-2 mt-2">
                        <Skeleton className="h-8 w-20 rounded-full" />
                        <Skeleton className="h-8 w-20 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Property Images Skeleton */}
            <div className="relative mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[300px] md:h-[500px]">
                    <Skeleton className="md:col-span-2 md:row-span-2 rounded-l-lg" />
                    <Skeleton className="hidden md:block" />
                    <Skeleton className="hidden md:block rounded-tr-lg" />
                    <Skeleton className="hidden md:block" />
                    <Skeleton className="hidden md:block rounded-br-lg" />
                </div>

                {/* Navigation buttons skeleton */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                </div>

                <Skeleton className="absolute bottom-4 right-4 h-8 w-32" />
            </div>

            {/* Property Content Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {/* Key Features Skeleton */}
                    <div className="flex flex-wrap gap-6 mb-8">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="flex items-center">
                                <Skeleton className="h-5 w-5 mr-2" />
                                <Skeleton className="h-4 w-20" />
                            </div>
                        ))}
                    </div>

                    {/* Tabs Skeleton */}
                    <Tabs defaultValue="overview" className="mb-8">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="overview">
                                <Skeleton className="h-4 w-16" />
                            </TabsTrigger>
                            <TabsTrigger value="amenities">
                                <Skeleton className="h-4 w-16" />
                            </TabsTrigger>
                            <TabsTrigger value="location">
                                <Skeleton className="h-4 w-16" />
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="mt-6">
                            <div className="space-y-4">
                                <Skeleton className="h-6 w-48" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-3/4" />
                                </div>

                                <Skeleton className="h-6 w-40 mt-6" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <div key={item} className="flex justify-between">
                                            <Skeleton className="h-4 w-24" />
                                            <Skeleton className="h-4 w-16" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="amenities" className="mt-6">
                            <div className="space-y-6">
                                <Skeleton className="h-6 w-48" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                                        <div key={item} className="flex items-center">
                                            <Skeleton className="h-5 w-5 mr-3" />
                                            <Skeleton className="h-4 w-32" />
                                        </div>
                                    ))}
                                </div>

                                <Skeleton className="h-6 w-40 mt-6" />
                                <div className="space-y-2">
                                    {[1, 2, 3, 4].map((item) => (
                                        <div key={item} className="flex items-center">
                                            <Skeleton className="h-4 w-16 mr-2" />
                                            <Skeleton className="h-4 w-64" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="location" className="mt-6">
                            <div className="space-y-4">
                                <Skeleton className="h-6 w-40" />
                                <div className="flex items-center">
                                    <Skeleton className="h-5 w-5 mr-2" />
                                    <Skeleton className="h-4 w-48" />
                                </div>
                                <Skeleton className="aspect-video rounded-lg" />
                                <div className="mt-6">
                                    <Skeleton className="h-5 w-32 mb-2" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-3/4" />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Contact Agent Skeleton */}
                <div className="lg:col-span-1">
                    <Card className="p-6">
                        <div className="flex items-center mb-6">
                            <Skeleton className="h-16 w-16 rounded-full mr-4" />
                            <div className="flex-1">
                                <Skeleton className="h-5 w-32 mb-1" />
                                <Skeleton className="h-4 w-24 mb-2" />
                                <Skeleton className="h-5 w-20" />
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <Skeleton className="h-10 w-full" />
                            <Skeleton className="h-10 w-full" />
                            <Skeleton className="h-10 w-full" />
                        </div>

                        <Separator className="my-6" />

                        <div>
                            <Skeleton className="h-5 w-40 mb-4" />
                            <div className="space-y-4">
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-24 w-full" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Similar Properties Skeleton */}
            <div className="mt-12">
                <Skeleton className="h-8 w-48 mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <Card key={item} className="overflow-hidden">
                            <Skeleton className="h-48 w-full" />
                            <div className="p-4">
                                <Skeleton className="h-6 w-3/4 mb-1" />
                                <Skeleton className="h-4 w-1/2 mb-2" />
                                <Skeleton className="h-6 w-32 mb-2" />
                                <div className="flex justify-between">
                                    <Skeleton className="h-4 w-12" />
                                    <Skeleton className="h-4 w-12" />
                                    <Skeleton className="h-4 w-16" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
