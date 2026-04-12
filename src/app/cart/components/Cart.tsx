'use client'

import Link from 'next/link'
import { MoveUpRight, Trash2 } from 'lucide-react'
import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function Cart() {
  const cartList = [123]

  const Quantities = Array.from({ length: 10 }, (_, i) => i + 1)

  const content =
    cartList.length > 0 ? (
      <div className="flex items-start">
        <div className="flex-1 mr-14">
          <h2 className="text-xl font-bold mb-1">Cart</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center">
                    <Image src="" alt="" width={64} height={64} className="w-[64xp] h-[64px]" />
                    <div className="ml-4 space-y-3">
                      <p className="text-sm font-medium">搅拌机</p>
                      <p className="text-xs text-gray-400">黑色</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Trash2 className="mr-[5]" />
                    <Select defaultValue="banana">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent position={'item-aligned'}>
                        <SelectGroup>
                          {Quantities.map((item) => {
                            return (
                              <SelectItem value={item + ''} key={item}>
                                {item}
                              </SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </TableCell>
                <TableCell>123</TableCell>
                <TableCell>123</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="w-[200px]">
          <h2 className="text-2xl font-bold mb-2">Total</h2>
          <p className="text-2xl font-bold text-red-400 mb-3">$100</p>
          <Link href="/account">
            <Button className="w-full">Login</Button>
          </Link>
          <p className="text-xs text-center mt-1 text-slate-300">You need to login to check out!</p>
        </div>
      </div>
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
