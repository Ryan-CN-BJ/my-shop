type SortValueType = 'latest' | 'low' | 'hight'
type Product = {
  id: number
  description: string
  image: string
  name: string
  price: number
  variant: Array[string]
}

type CartItem = {
  product: Product
  quantity: number
  selectvarient: string
}
