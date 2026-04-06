// 'use client'
export const dynamicParams = false

// import { use } from 'react'
import { productDetailAction, productsAction } from '@/actions/product'
// import { useEffect, useState } from 'react'
import Image from 'next/image'
import AddCart from '../components/AddCart'
export async function generateStaticParams() {
  const { data } = await productsAction()
  return data
    .map((product) => {
      return {
        id: product.id + '',
      }
    })
    .slice(0, 5)
}

export default async function DetailPage(props: PageProps<'/detail/[id]'>) {
  // const { id } = use(props.params)
  // const [product, setProduct] = useState<Product>()
  // useEffect(() => {
  //   productDetailAction({ id: parseInt(id) }).then((product) => {
  //     setProduct(product)
  //   })
  // }, [id])
  const { id } = await props.params
  const product = await productDetailAction({ id: parseInt(id) })

  if (!product) {
    return null
  }
  return (
    <div className="w-[980] py-[25] mx-auto flex items-start">
      <div className="w-[200]">
        <h2 className="text-[21px] mb-[10] font-bold">{product?.name}</h2>
        <p>{product?.description}</p>
      </div>
      <div className="ml-[20]">
        {product?.image && (
          <Image
            className="w-[300] bg-slate-50"
            src={product?.image}
            alt={product?.name}
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="ml-[100]">
        <AddCart product={product} />
      </div>
    </div>
  )
}
