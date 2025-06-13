import pool from "@/lib/db";

export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM "Property" ORDER BY "listed_at" DESC');
        return Response.json(result.rows);
    } catch (err: any) {
        console.error('❌ Error fetching properties:', err);
        return Response.json({ error: 'Failed to fetch properties' }, { status: 500 });
    }
}
export async function POST(req: Request) {
    try {
        const data = await req.json();

        const {
            title,
            description,
            type,
            monthlyRent,
            city,
            suburb,
            status,
            bedrooms,
            bathrooms,
            parkingSpaces,
            images,
        } = data;

        const listedAt = new Date().toISOString(); // LocalDate equivalent

        const result = await pool.query(
            `INSERT INTO "Property" (
        title, description, type, "monthly_rent", city, suburb, status,
        bedrooms, bathrooms, "parking_spaces", images, "listed_at"
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7,
        $8, $9, $10, $11, $12
      ) RETURNING *`,
            [
                title,
                description,
                type,
                monthlyRent,
                city,
                suburb,
                status,
                bedrooms,
                bathrooms,
                parkingSpaces,
                images,
                listedAt,
            ]
        );

        return Response.json(result.rows[0], { status: 201 });
    } catch (err: any) {
        console.error('❌ Error creating property:', err);
        return Response.json({ error: 'Failed to create property' }, { status: 500 });
    }
}
export async function DELETE(){}
