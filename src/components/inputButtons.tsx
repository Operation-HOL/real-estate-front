import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Minus, Plus} from "untitledui-js-base";
import {Label} from "@/components/ui/label";

export function InputButtons({label}: {label?: string}) {
    const [number,setNumber] = useState(1);

    const increment = () => {
        number < 10 ? setNumber(prev => prev + 1) : setNumber(10) ;
    };

    const decrement = () => {
        number > 1 ? setNumber(prev => prev - 1) : setNumber(1);
    };


    return (
        <div className="flex flex-col gap-1">
            {label && <Label htmlFor={label} className="text-[#444] font-normal">{label}</Label>}
            <div className="relative">
                <button
                    onClick={decrement}
                    className="absolute hover:cursor-pointer left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
                    <Minus className="h-4 w-4 text-primary" />
                </button>
                <Input
                    onChange={(e) => setNumber(Number(e.target.value))}
                    type="number"
                    id={label}
                    value={number}
                    className="px-8 text-center py-5" // Add right padding so the text doesn't overlap with the icon
                />
                <button
                    onClick={increment}
                    className="absolute hover:cursor-pointer right-2 top-1/2 -translate-y-1/2 h-4 w-4">
                    <Plus className="h-4 w-4 text-primary" />
                </button>
            </div>
        </div>
    )
}
