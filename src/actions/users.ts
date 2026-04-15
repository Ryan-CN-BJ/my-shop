'use server'
import sql from '@/lib/db'

export async function loginAction(email: string, password: string) {
  const res = await sql`SELECT * FROM users WHERE email = ${email} AND password = ${password}`
  if (res.length === 0) {
    return {
      status: 401,
      message: 'login failed',
    }
  } else {
    return {
      status: 200,
      data: res[0],
      message: 'login success',
    }
  }
}
