'use client'


import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { useState } from "react"
import {Button} from "@/components/ui/button";

export default function ResponsiveHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed w-full backdrop-blur-xl border-b border-dashed border-gray-400 bg-black/20 z-50">
            <div className="px-4 sm:px-8 lg:px-20 py-3 sm:py-5">
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-[10vw_1fr_10vw] lg:items-center">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <Image
                            width="100"
                            height="100"
                            src="/ore.png"
                            alt="logo"
                            className="w-12 h-12 xl:w-16 xl:h-16 rounded-full"
                        />
                        <p className="text-2xl xl:text-3xl text-white font-normal tracking-widest">OASES</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex justify-center  items-center gap-6 xl:gap-10">
                        <Link
                            href="#"
                            className="bg-orange-500 backdrop-blur-lg px-4 xl:px-5 py-2 rounded-full text-black font-medium transition-all hover:bg-orange-400"
                        >
                            Home
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About Us
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Properties
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Empty div for grid balance */}
                    <div className="flex gap-3">
                        <Button className="px-5 hidden font-normal">Login</Button>
                        <Button className="px-5 hidden font-normal">Signup</Button>
                    </div>
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Image
                                width="100"
                                height="100"
                                src="/ore.png"
                                alt="logo"
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                            />
                            <p className="text-xl sm:text-2xl text-white font-normal tracking-widest">OASES</p>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white transition-colors p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <nav className="mt-4 pb-4 border-t border-gray-400 border-dashed">
                            <div className="flex flex-col gap-4 pt-4">
                                <Link
                                    href="#"
                                    className="bg-orange-500 backdrop-blur-lg px-4 py-2 rounded-full text-black font-medium text-center transition-all hover:bg-orange-400"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-white transition-colors text-center py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-white transition-colors text-center py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Properties
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-white transition-colors text-center py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                                <div className="flex justify-center pt-2 border-t w-full items-stretch gap-3">
                                    <Button className="p-7 font-normal">Login</Button>
                                    <Button className="p-7 font-normal">Signup</Button>
                                </div>
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    )
}

