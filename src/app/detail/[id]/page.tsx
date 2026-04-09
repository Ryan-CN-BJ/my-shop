import { productDetailAction, productsAction } from '@/actions/product'
import Image from 'next/image'
import { Suspense } from 'react'
import AddCart from '../components/AddCart'
// import { cacheLife } from 'next/cache'
export async function generateStaticParams() {
  const { data } = await productsAction()
  return data.map((product) => {
    return {
      id: product.id + '',
    }
  })
}

function DetailFallback() {
  return (
    <>
      <div className="w-[200]">
        <div className="h-[30] w-[160] bg-slate-200 rounded mb-[10]" />
        <div className="h-[16] w-[200] bg-slate-100 rounded" />
      </div>
      <div className="ml-[20] h-[300] w-[300] bg-slate-100 rounded" />
      <div className="ml-[100] h-[36] w-[120] bg-slate-100 rounded" />
    </>
  )
}

async function DetailContent({ id }: { id: number }) {
  // 'use cache'
  // cacheLife({
  //   stale: 60,
  //   revalidate: 60 * 60 * 24,
  //   expire: 60 * 60 * 24,
  // })
  const product = await productDetailAction({ id })

  if (!product) {
    return null
  }

  return (
    <>
      <div className="w-[200]">
        <h2 className="text-[21px] mb-[10] font-bold">{product?.name}</h2>
        <p>{product?.description}</p>
      </div>
      <div className="ml-[20] w-[300] h-[300] bg-slate-50 relative">
        {product?.image && (
          <Image
            className="object-cover"
            src={product?.image}
            alt={product?.name}
            fill={true}
            loading={'eager'}
            sizes="30vw"
          />
        )}
      </div>
      <div className="ml-[100]">
        <AddCart product={product} />
      </div>
    </>
  )
}

export default async function DetailPage(props: PageProps<'/detail/[id]'>) {
  // 'use cache'
  // cacheLife({
  //   stale: 60,
  //   revalidate: 60 * 60 * 24,
  //   expire: 60 * 60 * 24,
  // })
  const { id } = await props.params
  return (
    <div className="w-[980] py-[25] mx-auto flex items-start">
      <Suspense fallback={<DetailFallback />}>
        <DetailContent id={Number(id)} />
      </Suspense>
    </div>
  )
}
