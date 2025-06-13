import pool from '@/lib/db'

export async function GET() {
    const res = await pool.query('SELECT NOW()')
    return Response.json(res.rows[0])
}
