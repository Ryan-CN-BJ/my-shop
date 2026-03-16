import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function Header() {
  return (
    <div className="h-[100] px-[20] border-b border-[#c3c3c3] bg-white box-border">
      <div className="mx-auto w-[1240] h-full box-border flex justify-between items-center">
        <h1 className="text-2xl">
          <Link href={'/'}>My Store</Link>
        </h1>
        <div className="flex gap-[15] text-sm">
          <Link href="/search">Search</Link>
          <Separator orientation={'vertical'} />
          <Link href="/account">Account</Link>
          <Separator orientation={'vertical'} />
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </div>
  )
}
