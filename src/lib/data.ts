export const fetchAllProperties = async () => {
    try {
        // for now fetch straight from the server, without using the api
        const res = await fetch("http://localhost:8080/property/all");
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
}
