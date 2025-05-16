import { useState } from 'react';

type SearchComponentProps = {
    onSearch: (query: string) => void;
};

export default function SearchComponent({ onSearch }: SearchComponentProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="border px-2 py-1 mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-1">
                Search
            </button>
        </form>
    );
}
