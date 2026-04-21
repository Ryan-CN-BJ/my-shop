'use server'
import sql from '@/lib/db'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
const SECRET_KEY = 'my-shop-secret-key'

export async function loginAction(email: string, password: string) {
  const res = await sql`SELECT * FROM users WHERE email = ${email} AND password = ${password}`
  const cookie = await cookies()
  if (res.length === 0) {
    return {
      status: 401,
      message: 'login failed',
    }
  } else {
    const token = jwt.sign(
      {
        email: res[0].email,
        name: res[0].name,
        id: res[0].id,
      },
      SECRET_KEY,
      {
        expiresIn: '1h',
      },
    )
    cookie.set({
      name: 'token',
      value: token,
      path: '/',
      expires: new Date(new Date().getTime() + 60 * 60 * 24),
      httpOnly: true,
    })
    return {
      status: 200,
      data: {
        name: res[0].name,
        id: res[0].id,
        email: res[0].email,
      },
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

export async function authAction() {
  try {
    const cookie = await cookies()
    const token = cookie.get('token')?.value
    if (!token) {
      return {
        status: 401,
        message: 'Auth failed!',
      }
    }
    const payload = jwt.verify(token, SECRET_KEY)
    return {
      status: 200,
      message: 'Auth success',
      data: payload,
    }
  } catch (e) {
    return {
      status: 401,
      message: 'Auth failed!',
      error: e,
    }
  }
}

export async function logoutAction() {
  const cookie = await cookies()
  cookie.delete('token')
  return {
    status: 200,
    message: 'logout success',
  }
}
