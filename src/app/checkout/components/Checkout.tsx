'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useCartStore } from '@/store'
export default function Checkout({ address }: { address: Address[] }) {
  const [selectedAddress, setSelectedAddress] = useState<string>('')
  const handleAddressChange = (v: string) => {
    setSelectedAddress(v)
  }
  const cartList = useCartStore((state) => state.cartList)
  useEffect(() => {
    setSelectedAddress('')
  }, [address])
  return (
    <>
      <div className="border-b pb-4">
        <h2 className="text-2xl">Address</h2>
        {address.length > 0 ? (
          <Select value={selectedAddress} onValueChange={handleAddressChange}>
            <SelectTrigger className="w-full">
              <SelectValue asChild>
                <div>{address.find((ad) => ad.id === selectedAddress)?.name}</div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent position={'item-aligned'}>
              <SelectGroup>
                {address.map((ad) => {
                  return (
                    <SelectItem value={ad.id} key={ad.id}>
                      <div>
                        <h3>{ad.name}</h3>
                        <p>city:{ad.city}</p>
                        <p>address:{ad.address}</p>
                        <p>phone:{ad.phone}</p>
                      </div>
                    </SelectItem>
                  )
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        ) : (
          <div>
            <p>Dont have a shipping address yet?</p>
            <div className="flex text-sm items-center underline text-orange-400">
              <Link href="/account">Add Address</Link>
              <ArrowUpRight />
            </div>
          </div>
        )}
      </div>
      <div className="border-b pb-4">
        <h2 className="text-2xl">Cart</h2>
        {cartList.length > 0 ? (
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
              {cartList.map((item) => {
                return (
                  <TableRow key={item.product.id + item.selectvarient}>
                    <TableCell>
                      <div className="flex items-center">
                        <Image
                          src={item.product.image}
                          alt=""
                          width={64}
                          height={64}
                          className="w-[64xp] h-[64px]"
                        />
                        <div className="ml-4 space-y-3">
                          <p className="text-sm font-medium">{item.product.name}</p>
                          <p className="text-xs text-gray-400">{item.selectvarient}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">{item.quantity}</div>
                    </TableCell>
                    <TableCell>{item.product.price}</TableCell>
                    <TableCell>{item.product.price * item.quantity}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        ) : (
          <div>
            <p>Cart is empty</p>
            <div className="flex text-sm items-center underline text-orange-400">
              <Link href="/">Shop Now</Link>
              <ArrowUpRight />
            </div>
          </div>
        )}
      </div>
      <div className="border-b pb-4">
        <h2 className="text-2xl">Payment</h2>
        <p>In progress of functional construction...</p>
      </div>
      <div className="mt-4">
        <Button disabled={!selectedAddress || cartList.length === 0}>Pay now</Button>
      </div>
    </>
  )
}
