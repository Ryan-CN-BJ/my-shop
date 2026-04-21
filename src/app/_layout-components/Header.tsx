'use client'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Title, MenuList } from '@/lib/constant'
import { Fragment } from 'react/jsx-runtime'
import { useCartStore } from '@/store'

export default function Header() {
  const cartStore = useCartStore()
  return (
    <div className="h-[80] border-b bg-white box-border">
      <div className="mx-auto w-[980] h-full box-border flex justify-between items-center">
        <h1 className="text-2xl">
          <Link href={'/'}>{Title}</Link>
        </h1>
        <div className="flex gap-[10] text-sm">
          {MenuList.map((item, index) => {
            return (
              <Fragment key={item.title}>
                <Link href={item.href}>{item.title}</Link>
                {index === MenuList.length - 1 ? null : <Separator orientation={'vertical'} />}
              </Fragment>
            )
          })}
          {cartStore.cartList.length ? `(${cartStore.cartList.length})` : ''}
        </div>
      </div>
    </div>
  )
}
