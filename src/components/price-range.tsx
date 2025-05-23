import {Label} from "@/components/ui/label";
import {Minus} from "untitledui-js-base";
import {Input} from "@/components/ui/input";

export function PriceRange() {
    return (
        <div className="flex w-[55%] flex-col gap-1">
            <Label className="text-[#444] font-normal">Price range</Label>
            <div className="flex gap-2 items-center">
                <Input type="number" defaultValue={1000} className="w-full py-5" />
                <Minus size={"25"} />
                <Input type="number" defaultValue={3000} className="w-full py-5" />
            </div>
        </div>
    )
}
