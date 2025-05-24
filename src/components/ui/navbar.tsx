"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Info, Phone, Settings, User } from "lucide-react"
import { cn } from "@/lib/utils"
import {Phone01, Phone02, PhoneCall01} from "untitledui-js-base";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-3">
                    <Link href="/" className="text-sm tracking-wide font-medium transition-colors hover:text-primary">
                        Home
                    </Link>
                    <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                        Properties
                    </Link>
                    <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                        About Us
                    </Link>
                    <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                        FAQs
                    </Link>
                </nav>

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold">OASES</span>
                </Link>



                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        Log In
                    </Button>
                    <Button size="sm">Sign Up</Button>
                </div>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-x-0 top-16 z-50 bg-background  md:hidden transition-all duration-300 ease-in-out",
                    isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
                )}
            >
                <div className="container py-4 space-y-4">
                    <nav className="flex tracking-wide flex-col space-y-4">
                        <Link
                            href="#"
                            className="flex items-center max-sm:border-b space-x-2 text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Home className="h-4 w-4" />
                            <span>Home</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center max-sm:border-b space-x-2 text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Info className="h-4 w-4" />
                            <span>About</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center max-sm:border-b space-x-2 text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Settings className="h-4 w-4" />
                            <span>Services</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center max-sm:border-b space-x-2 text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Phone className="h-4 w-4" />
                            <span>Contact</span>
                        </Link>
                    </nav>

                    <div className="flex flex-col space-y-2 pt-2">
                        <Button variant="outline" className="w-full justify-start" onClick={() => setIsMenuOpen(false)}>
                            <User className="h-4 w-4 mr-2" />
                            Log In
                        </Button>
                        <Button className="w-full justify-start" onClick={() => setIsMenuOpen(false)}>
                            <User className="h-4 w-4 mr-2" />
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
