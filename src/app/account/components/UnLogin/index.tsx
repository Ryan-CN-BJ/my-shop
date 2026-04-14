'use client'
import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

export default function UnLogin() {
  const [op, setOp] = useState<'login' | 'register'>('login')
  return <div>{op === 'login' ? <Login toggle={setOp} /> : <Register toggle={setOp} />}</div>
}
