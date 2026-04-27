import { redirect } from 'next/navigation'
import Checkout from './components/Checkout'
import { authAction } from '@/actions/users'
import { addressAction } from '@/actions/addtess'
import { JwtPayload } from 'jsonwebtoken'

export default async function Page() {
  const res = await authAction()
  const authed = res.status === 200 ? true : false
  if (!authed) {
    redirect('/account')
  }
  const addressRes = await addressAction((res.data as JwtPayload).id)
  const address = addressRes.data

  return (
    <div className="w-[600px] py-[25px] mx-auto">
      <Checkout address={address} />
    </div>
  )
}
