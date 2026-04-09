import Sort from '@/app/(index)/_components/Sort'
import Products from '@/app/(index)/_components/Products'
import { cacheLife } from 'next/cache'
import sql from '@/lib/db'

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

export default async function Page() {
  const res = await getCachedProducts()
  const products = res
  return (
    <div className="w-[980] py-[50] mx-auto flex items-start">
      <Sort />
      <Products products={products} />
    </div>
  )
}
