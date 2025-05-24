import {Button} from "@/components/ui/button";
import Link from "next/link";

export function Header() {
    return (
        <main className="flex flex-col w-full">
            <header className="flex max-sm:flex-col justify-between  items-center">
                <nav className="flex max-sm:w-full max-sm:justify-evenly tracking-wider text-xs gap-2">
                    <Link href="/">Home</Link>
                    <Link href="/" className="text-muted-foreground">Properties</Link>
                    <Link href="/" className="text-muted-foreground">About Us</Link>
                    <Link href="/" className="text-muted-foreground">FAQs</Link>
                </nav>
                <h1 className="text-2xl text-center font-semibold text-primary">OASES</h1>
                <div className="space-x-2">
                    <Button variant="outline">Login</Button>
                    <Button>Signup</Button>
                </div>
            </header>
            <div className="w-full flex items-center justify-center my-10 h-10 bg-[#222]">
                <p className="text-white text-center text-xs tracking-wider font-normal">
                    Lock in Your New Home with Flexible Payment Plans and Special Discounts!
                    <Link href="#" className="font-bold" > Learn More </Link>
                </p>
            </div>
        </main>
    )
}
