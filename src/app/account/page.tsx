import UnLogin from './components/UnLogin'
import Logined from './components/Logined'
import { authAction } from '@/actions/users'
import { JwtPayload } from 'jsonwebtoken'
import { addressAction } from '@/actions/addtess'
export default async function Page() {
  const res = await authAction()
  const authed = res.status === 200 ? true : false
  let address: Address[] = []
  if (authed) {
    const user = res.data as JwtPayload
    const addressRes = await addressAction(user.id)
    address = addressRes.data
  }
  return (
    <div className="w-[980] py-[50] mx-auto">
      {authed ? <Logined user={res.data as JwtPayload} address={address} /> : <UnLogin />}
    </div>
  )
}
