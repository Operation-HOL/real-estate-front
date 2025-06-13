export async function searchProperties(query: string) {
    try {
        // querying the search service
        const res = await fetch("http://localhost:3000/api/property/search?q=" + query);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
}
