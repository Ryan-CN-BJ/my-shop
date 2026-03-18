'use server'

import sql from '@/lib/db'
export async function productsAction(): Promise<{
  status: number
  body: string
  data: Array<Product>
}> {
  const result = await sql.query('SELECT * FROM products')
  return {
    status: 200,
    body: 'success',
    data: result as Array<Product>,
  }
}
