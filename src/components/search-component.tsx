import { useState } from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {SearchLG} from "untitledui-js-base";

type SearchComponentProps = {
    onSearch?: (query: string) => void;
};

export default function SearchComponent({ onSearch }: SearchComponentProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch!(query);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col w-full gap-1">
                <Label htmlFor="search" className="pl-1 font-normal text-[#444]">Search</Label>
                <div className="relative w-full">
                    <Input
                        id="search"
                        type="text"
                        placeholder="e.g. 2 room flat in Elitha Park..."
                        className="pr-10 py-5" // Add right padding so the text doesn't overlap with the icon
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
                        <SearchLG className="h-4 w-4 text-muted-foreground" />
                    </button>
                </div>
            </div>
        </form>
    );
}
