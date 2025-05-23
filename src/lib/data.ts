export const fetchAllProperties = async () => {
    try {
        // for now fetch straight from the server, without using the api
        const res = await fetch("https://property-service-2mkg.onrender.com/property/all");
        return await res.json();
    } catch (error) {
        throw error;
    }
}

export const fetchProperty = async (propertyId: string) => {
    try {
        const res = await fetch(`https://property-service-2mkg.onrender.com/property/${propertyId}`);
        return await res.json();
    } catch (error) {
        throw error;
    }
}
