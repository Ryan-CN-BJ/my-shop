'use client'

import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'

export default function Cart() {
  const cartList = []

  const content =
    cartList.length > 0 ? (
      <div>lsit</div>
    ) : (
      <div className="py-[50px]">
        <h2 className="text-xl font-bold">Cart</h2>
        <p className="text-sm w-[400px] mb-6 mt-4">
          You don‘t have anything in your cart. Let‘s change that,use the link below to browser our
          products！
        </p>
        <div className="flex items-center text-sm underline text-orange-300">
          <Link href="/">Start Shopping</Link>
          <MoveUpRight size={20} />
        </div>
      </div>
    )

  return <div>{content}</div>
}
