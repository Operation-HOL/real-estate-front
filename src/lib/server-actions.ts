export async function searchProperties(query: string) {
    try {
        const res = await fetch("http://localhost:8081/api/v1/search?query=" + query);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
}
