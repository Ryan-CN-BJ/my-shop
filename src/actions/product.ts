'use server'
import sql from '@/lib/db'
import { cacheLife } from 'next/cache'
import { revalidatePath } from 'next/cache'
export async function productsAction(): Promise<{
  status: number
  body: string
  data: Array<Product>
}> {
  'use cache'
  cacheLife({ revalidate: 10 })
  const result = await sql.query('SELECT * FROM products')
  return {
    status: 200,
    body: 'success',
    data: result as Array<Product>,
  }
}
