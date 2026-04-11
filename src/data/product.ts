import 'server-only'
import { cacheLife } from 'next/cache'
import sql from '@/lib/db'

const PRODUCT_CACHE_POLICY = {
  stale: 60 * 1,
  revalidate: 50,
  expire: 60 * 60 * 24,
} as const

export async function getCachedProducts(): Promise<Array<Product>> {
  'use cache'
  cacheLife(PRODUCT_CACHE_POLICY)
  const result = await sql.query('SELECT * FROM products')
  return result as Array<Product>
}

export async function getCachedProductById(id: number): Promise<Product> {
  'use cache'
  cacheLife(PRODUCT_CACHE_POLICY)
  const result = await sql.query('SELECT * FROM products WHERE id = $1', [id])
  return result[0] as Product
}
