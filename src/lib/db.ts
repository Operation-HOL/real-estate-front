import {Pool} from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://propertydb_owner:npg_VMhnygsD3zU0@ep-odd-snow-a9lvmxt7-pooler.gwc.azure.neon.tech/propertydb?sslmode=require'
})

export default pool
