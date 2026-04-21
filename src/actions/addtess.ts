'use server'
import sql from '@/lib/db'

export async function addAddressAction({ name, city, address, phone, userid }: Address) {
  const res =
    await sql`INSERT INTO addresses (name,city,address,phone,userid) VALUES (${name},${city},${address},${phone},${userid}) RETURNING name,city,address,phone,userid`
  if (res.length > 0) {
    return {
      status: 200,
      data: res[0],
      message: 'Add address success',
    }
  } else {
    return {
      status: 401,
      message: 'Add address failed',
    }
  }
}
