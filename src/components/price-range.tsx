'use client'
import {Label} from "@/components/ui/label";
import {Minus} from "untitledui-js-base";
import {Input} from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {useState} from "react";

export function PriceRange() {
    const [minPrice, setMinPrice] = useState<string>("")
    const [maxPrice, setMaxPrice] = useState<string>("")

    const handleSearch = () => {
        console.log("Price range:", { minPrice, maxPrice })
        // Add your search logic here
    }

    const handleReset = () => {
        setMinPrice("")
        setMaxPrice("")
    }
    return (
        <div className="flex w-full col-span-4 flex-col gap-1">
            {/*<Label className="text-[#444] font-normal">Price range</Label>*/}
            <div className="flex gap-2 items-center">
                <div className="grid w-full grid-cols-2 sm:grid-cols-2 gap-4">
                    <PriceSelect
                        label="Min Price"
                        placeholder="Select min price"
                        minValue={1000}
                        maxValue={10000}
                        step={500}
                        value={minPrice}
                        onValueChange={setMinPrice}
                    />
                    <PriceSelect
                        label="Max Price"
                        placeholder="Select max price"
                        minValue={2000}
                        maxValue={10000}
                        step={500}
                        value={maxPrice}
                        onValueChange={setMaxPrice}
                    />
                </div>
            </div>
        </div>
    )
}



interface PriceSelectProps {
    label: string
    placeholder: string
    minValue: number
    maxValue: number
    step?: number
    value?: string
    onValueChange?: (value: string) => void
}

export function PriceSelect({
                                label,
                                placeholder,
                                minValue,
                                maxValue,
                                step = 1000,
                                value,
                                onValueChange,
                            }: PriceSelectProps) {
    // Generate price options based on min, max, and step
    const generatePriceOptions = () => {
        const options = []
        for (let price = minValue; price <= maxValue; price += step) {
            options.push(price)
        }
        return options
    }

    const formatPrice = (price: number) => {
        return `R ${price.toLocaleString()}`
    }

    const priceOptions = generatePriceOptions()

    return (
        <div className="flex flex-col gap-y-1">
            <Label htmlFor={label.toLowerCase().replace(" ", "-")} className="font-normal text-[#444]">
                {label}
            </Label>
            <Select value={value} onValueChange={onValueChange}>
                <SelectTrigger className="w-full py-5">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {priceOptions.map((price) => (
                        <SelectItem key={price} value={price.toString()}>
                            {formatPrice(price)}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

