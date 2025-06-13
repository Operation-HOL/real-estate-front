import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://propertydb_owner:npg_VMhnygsD3zU0@ep-odd-snow-a9lvmxt7-pooler.gwc.azure.neon.tech/propertydb?sslmode=require',
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get('q');

        if (!query) {
            return Response.json({ error: 'Missing search query' }, { status: 400 });
        }

        const result = await pool.query(
            `
          SELECT *,
                 ts_rank(search_vector, plainto_tsquery('english', $1)) AS rank
          FROM "Property"
          WHERE search_vector @@ plainto_tsquery('english', $1)
          ORDER BY rank DESC;
          `,
                [query]
        );

        return Response.json(result.rows);
    } catch (err) {
        console.error('❌ Full-text search error:', err);
        return Response.json({ error: 'Search failed' }, { status: 500 });
    }
}
