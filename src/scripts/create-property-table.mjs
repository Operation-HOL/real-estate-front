import {Pool} from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://propertydb_owner:npg_VMhnygsD3zU0@ep-odd-snow-a9lvmxt7-pooler.gwc.azure.neon.tech/propertydb?sslmode=require'
})

async function createPropertyTable() {
    try {
        await pool.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`)

        await pool.query(`
          CREATE TABLE IF NOT EXISTS "Property" (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            title TEXT NOT NULL,
            description TEXT,
            type TEXT,
            monthly_rent NUMERIC(10, 2),
            city TEXT,
            suburb TEXT,
            status TEXT,
            bedrooms INTEGER,
            bathrooms INTEGER,
            parking_spaces INTEGER,
            images TEXT[],
            listed_at DATE
          );
        `)

        console.log('✅ Property table created successfully')
    } catch (err) {
        console.error('❌ Error creating table:', err)
    } finally {
        await pool.end()
    }
}

createPropertyTable();
