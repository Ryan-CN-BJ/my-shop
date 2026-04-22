'use client'
import { Button } from '@/components/ui/button'
import { JwtPayload } from 'jsonwebtoken'
import { logoutAction } from '@/actions/users'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import Address from './Address'
export default function Logined({ user, address }: { user: JwtPayload; address: Address[] }) {
  const router = useRouter()
  const handleLogout = async () => {
    const res = await logoutAction()
    if (res.status === 200) {
      router.refresh()
      toast.success('', {
        description: 'logout success!',
        position: 'top-center',
      })
    }
  }
  return (
    <div>
      <div>
        <h2 className="text-lg font-bold leading-10">Account</h2>
        <div className="flex justify-between items-center">
          <div>
            <p className="pb-1">Hello，{user.name}</p>
            <p>Email:{user.email}</p>
          </div>
          <Button className="cursor-pointer" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold leading-10">Address</h2>
        <div>
          <p>View and update your shipping address, you can add as many as you like!</p>
          <p>Saving your address will maek them available during checkout!</p>
        </div>
        {/** todo 添加地址 */}
        <Address userId={user.id} address={address} />
      </div>
      <div>
        <h2 className="text-lg font-bold leading-10">Orders</h2>
        <p>There is currently no order information available!</p>
      </div>
    </div>
  )
}
