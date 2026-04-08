'use server'
import sql from '@/lib/db'
import { cacheLife } from 'next/cache'

const PRODUCT_CACHE_POLICY = {
  stale: 60,
  revalidate: 60,
  expire: 60 * 60 * 24,
} as const

async function getCachedProducts(): Promise<Array<Product>> {
  'use cache'
  cacheLife(PRODUCT_CACHE_POLICY)
  const result = await sql.query('SELECT * FROM products')
  return result as Array<Product>
}

async function getCachedProductById(id: number): Promise<Product> {
  'use cache'
  cacheLife(PRODUCT_CACHE_POLICY)
  const result = await sql.query('SELECT * FROM products WHERE id = $1', [id])
  return result[0] as Product
}

export async function productsAction(): Promise<{
  status: number
  body: string
  data: Array<Product>
}> {
  const data = await getCachedProducts()
  return {
    status: 200,
    body: 'success',
    data,
  }
}

export async function productDetailAction({ id }: { id: number }): Promise<Product> {
  return getCachedProductById(id)
}
