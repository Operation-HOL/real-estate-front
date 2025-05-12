import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { PropertyCard } from "@/components/property-card";

const properties = [
  { location: "Durbanville", roomType: "Single Room", price: "R 7900" },
  { location: "Bellville North", roomType: "Single Room", price: "R 8500" },
  { location: "Delft", roomType: "Single Room", price: "R 6800" },
  { location: "Someplace", roomType: "Single Room", price: "R 7900" },
  { location: "Somewhere", roomType: "Single Room", price: "R 8500" },
  { location: "Elsewhere", roomType: "Single Room", price: "R 6800" },
];

export default function Home() {
  return (
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Property Link</h1>
          <div className="space-x-2">
            <Button variant="outline">Login</Button>
            <Button>Signup</Button>
          </div>
        </header>

        {/* Hero */}
        <section className="text-center space-y-4">
          <h2 className="text-xl font-semibold">Find Your Place!</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Input placeholder="Search" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Room Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="sharing">Sharing</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Price Range" />
          </div>
        </section>

        {/* Listings */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Frequently Viewed Places!</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {properties.map((prop, i) => (
                <PropertyCard key={i} {...prop} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-muted-foreground py-6 text-sm">
          © 2023 Property Link, Inc.
        </footer>
      </div>
  );
}
