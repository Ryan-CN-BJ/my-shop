import Sort from '@/app/(index)/_components/Sort'
import Products from '@/app/(index)/_components/Products'
import { productsAction } from '@/actions/product'
export default async function Page() {
  const res = await productsAction()
  const products = res.data
  console.log(products)
  return (
    <div className="w-[980] py-[50] mx-auto flex items-start">
      <Sort />
      <Products products={products} />
    </div>
  )
}
