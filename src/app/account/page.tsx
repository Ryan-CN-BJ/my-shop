import UnLogin from './components/UnLogin'
import Logined from './components/Logined'
import { authAction } from '@/actions/users'
import { JwtPayload } from 'jsonwebtoken'
export default async function Page() {
  const res = await authAction()
  const authed = res.status === 200 ? true : false
  return (
    <div className="w-[980] py-[50] mx-auto">
      {authed ? <Logined user={res.data as JwtPayload} /> : <UnLogin />}
    </div>
  )
}
