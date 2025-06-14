import {UploadToR2Params, UploadToR2Response} from "@/lib/types";
import {PutObjectCommand, PutObjectCommandInput} from "@aws-sdk/client-s3";
import {r2Client} from "@/lib/utils";

export async function searchProperties(query: string) {
    try {
        // querying the search service
        const res = await fetch("http://localhost:3000/api/property/search?q=" + query);
        return await res.json();
    } catch (error) {
        throw error;
    }
}

export async function uploadToR2({fileBuffer, fileName, contentType,}: UploadToR2Params): Promise<UploadToR2Response> {
    const uploadParams: PutObjectCommandInput = {
        Bucket: process.env.R2_BUCKET_NAME!,
        Key: fileName,
        Body: fileBuffer,
        ContentType: contentType,
    };

    try {
        await r2Client.send(new PutObjectCommand(uploadParams));

        // Construct public URL (if using R2's public endpoint)
        const publicUrl = `https://${process.env.R2_PUBLIC_URL}/${fileName}`;
        return { url: publicUrl };
    } catch (err) {
        console.error("R2 Upload Error:", err);
        throw new Error("Failed to upload file to R2");
    }
}
