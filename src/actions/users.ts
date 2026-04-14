'use server'
import sql from '@/lib/db'

export async function loginAction(email: string, password: string) {
  const res = await sql.query('select * from users where email = $1 and password = $2', [
    email,
    password,
  ])
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
