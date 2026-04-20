import UnLogin from './components/UnLogin'
import Logined from './components/Logined'
import { authAction } from '@/actions/users'
export default async function Page() {
  const res = await authAction()
  return (
    <div className="w-[980] py-[50] mx-auto">{res.status === 200 ? <Logined /> : <UnLogin />}</div>
  )
}
