export type PropertyCardProps = {
    id: string;
    title: string;
    description: any;
    type: string;
    monthly_rent: number;
    street: string,
    city: string;
    suburb: string;
    status: string;
    bedrooms: number;
    images: string[];
    bathrooms: number;
    parking_spaces: number;
    listed_at: string;
};

export type UploadToR2Params = {
    fileBuffer: Buffer;
    fileName: string;
    contentType: string;
};

export type UploadToR2Response = {
    url: string;
};

