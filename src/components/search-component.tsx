import { Search as SearchLG } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {useState} from "react";

interface SearchComponentProps {
    onSearch?: (query: string) => void;
}

export default function SearchComponent({ onSearch }: SearchComponentProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim() && onSearch) { // Only search if there's a query and onSearch exists
            onSearch(query.trim());
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col w-full gap-1">
                <Label htmlFor="search" className="pl-1 font-normal text-[#444]">
                    Search
                </Label>
                <div className="relative w-full">
                    <Input
                        value={query}
                        onChange={handleInputChange}
                        id="search"
                        type="text"
                        placeholder="e.g. 2 room flat in Elitha Park..."
                        className="pr-10 py-5"
                    />
                    <button
                        type="submit" // Make this a submit button
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    >
                        <SearchLG className="h-4 w-4 text-muted-foreground" />
                    </button>
                </div>
            </div>
        </form>
    );
}
