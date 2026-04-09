import Sort from '@/app/(index)/_components/Sort'
import Products from '@/app/(index)/_components/Products'
import { getCachedProducts } from '@/data/product'

export default async function Page() {
  const res = await getCachedProducts()
  const products = res
  return (
    <div className="w-[980] py-[50] mx-auto flex items-start">
      <Sort />
      <Products products={products} />
    </div>
  )
}
