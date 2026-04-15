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

export async function registerAction(email: string, name: string, password: string) {
  const has = await sql`SELECT * FROM users WHERE email = ${email}`
  if (has.length > 0) {
    return {
      status: 401,
      message: 'The email already exists!',
    }
  }
  const res =
    await sql`INSERT INTO users (email,name,password) VALUES (${email},${name},${password}) RETURNING ID,name,email`
  console.log(res, 'res-----')
  if (res.length > 0) {
    return {
      status: 200,
      data: res[0],
      message: 'register success',
    }
  } else {
    return {
      status: 401,
      message: 'register failed',
    }
  }
}
