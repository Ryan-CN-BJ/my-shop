'use client'
import Image from 'next/image'
import { Fragment } from 'react/jsx-runtime'
import { useContext } from 'react'
import { appContext } from '@/app/context/Provider'

export default function Products({
  products,
}: {
  products: Array<Product>
  // s: Promise<Record<string, string | string[] | undefined>>
}) {
  const { sortType } = useContext(appContext)

  products.sort((p, x) => {
    if (sortType === 'low') {
      return p.price - x.price
    } else if (sortType === 'hight') {
      return x.price - p.price
    }
    return 0
  })

  return (
    <div className="flex-1 ml-[40]">
      <h2 className="mb-[30] text-2xl">All Products</h2>
      <div className="grid grid-cols-3 gap-[50]">
        {products.map((product) => {
          return (
            <Fragment key={product.id}>
              <div className="shadow-xl cursor-pointer transition duration-[3000] ease-in-out flex flex-col items-center bg-slate-50 hover:bg-slate-200 p-[15] rounded-2xl">
                <Image
                  className="w-[80%] h-[150] object-cover"
                  width={300}
                  height={150}
                  src={product.image}
                  alt={product.name}
                />
                <div className="mt-[20] px-[20] flex w-full justify-between items-center">
                  <h3>{product.name}</h3>
                  <p className="text-red-400 font-bold text-lg">{'$' + product.price}</p>
                </div>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
