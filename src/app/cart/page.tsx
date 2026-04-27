import Cart from './components/Cart'
import { authAction } from '@/actions/users'
export default async function Page() {
  const res = await authAction()
  const authed = res.status === 200 ? true : false
  return (
    <div className="w-[980px] py-[25px] mx-auto">
      <Cart authed={authed} />
    </div>
  )
}
