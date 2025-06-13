const DEPLOYED_BACKEND_URL = "https://property-service-2mkg.onrender.com";
const LOCAL_BACKEND_URL = "http://localhost:3000/api";

export const fetchAllProperties = async () => {
    try {
        // for now, fetch straight from the server, without using the api
        const res = await fetch(`${LOCAL_BACKEND_URL}/property/`);
        return await res.json();
    } catch (error) {
        throw error;
    }
}

export const fetchProperty = async (propertyId: string) => {
    try {
        const res = await fetch(`http://localhost:8080/property/${propertyId}`);
        return await res.json();
    } catch (error) {
        throw error;
    }
}
