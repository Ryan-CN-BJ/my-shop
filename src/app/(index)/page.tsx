import Sort from '@/app/(index)/_components/Sort'
import Products from '@/app/(index)/_components/Products'
// import { productsAction } from '@/actions/product'
import sql from '@/lib/db'
import { cacheLife } from 'next/cache'
import { connection } from 'next/server'

async function productsAction(): Promise<{
  status: number
  body: string
  data: Array<Product>
}> {
  'use cache'
  cacheLife({ stale: 10 })
  const result = await sql.query('SELECT * FROM products')
  return {
    status: 200,
    body: 'success',
    data: result as Array<Product>,
  }
}

export default async function Page() {
  await connection()
  const res = await productsAction()
  const products = res.data
  console.log(products)
  return (
    <div className="w-[980] py-[50] mx-auto flex items-start">
      <Sort />
      <Products products={products} />
    </div>
  )
}
