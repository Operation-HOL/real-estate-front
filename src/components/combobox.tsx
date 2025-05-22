"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Geist_Mono} from "next/font/google";
import {Label} from "@/components/ui/label";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const frameworks = [
    {
        value: "flat",
        label: "Flat",
    },
    {
        value: "apartment",
        label: "Apartment",
    },
    {
        value: "house",
        label: "House",
    },
    {
        value: "hall",
        label: "Hall",
    },
    {
        value: "commercial",
        label: "Commercial",
    },

]

export function ResidenceTypeCombobox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <div className="flex flex-col gap-1 w-[20%]">
            <Label className="text-gray-600">Type</Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between py-5 text-gray-600"
                    >
                        {value
                            ? frameworks.find((framework) => framework.value === value)?.label
                            : "Type..."}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Residence..." className="h-9" />
                        <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                                {frameworks.map((framework) => (
                                    <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        {framework.label}
                                        <Check
                                            className={cn(
                                                `ml-auto ${geistMono.className} `,
                                                value === framework.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
