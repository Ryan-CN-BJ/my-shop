'use client'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState, Fragment } from 'react'
import { useCartStore } from '@/store'

export default function AddCart({ product }: { product: Product }) {
  const [cate, setCate] = useState<string>('')
  const cartState = useCartStore((state) => state)

  const handleAddToCart = () => {
    const index = cartState.isItemInCart(product, cate)
    if (index === -1) {
      cartState.addToCart({
        product,
        quantity: 1,
        selectvarient: cate,
      })
    } else {
      const num = cartState.cartList[index].quantity
      cartState.updateQuantity(product, num + 1, cate)
    }
  }

  return (
    <div>
      <h3 className="font-bold text-[19px] mb-[10]">Select</h3>
      {
        <ToggleGroup
          type={'single'}
          spacing={2}
          onValueChange={(v) => {
            // if (!v) return
            setCate(v)
          }}
          value={cate}
        >
          {product?.variant.map((item: string) => {
            return (
              <Fragment key={item}>
                <ToggleGroupItem
                  className="bg-slate-200 hover:bg-amber-300 cursor-pointer data-[state=on]:bg-amber-300 data-[state=on]:text-white hover:text-white"
                  value={item}
                >
                  {item}
                </ToggleGroupItem>
              </Fragment>
            )
          })}
        </ToggleGroup>
      }
      <div className="pt-[10] mb-[10]">
        <h3 className="text-[18px] mb-[5]">Price</h3>
        <p className="font-bold text-red-500">{'$' + product.price}</p>
      </div>
      <Button className="cursor-pointer" disabled={cate ? false : true} onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  )
}
