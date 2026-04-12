import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CartState = {
  cartList: CartItem[]
  addToCart: (cartItem: CartItem) => void
  removeFromCart: (product: CartItem) => void
  isItemInCart: (product: Product, selectVarient: string) => number
  updateQuantity: (product: Product, quantity: number, selectvarient: string) => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartList: [],
      addToCart: (product) => {
        set((state) => ({ cartList: [...state.cartList, product] }))
      },
      removeFromCart: (cartItem) => {
        set((state) => {
          return {
            cartList: state.cartList.filter((item, i) => {
              return (
                cartItem.product.id !== item.product.id ||
                cartItem.selectvarient !== item.selectvarient
              )
            }),
          }
        })
      },
      isItemInCart: (product, selectVarient) => {
        return get().cartList.findIndex(
          (item) => item.product.id === product.id && item.selectvarient === selectVarient,
        )
      },
      updateQuantity: (product, quantity, selectvarient) => {
        set((state) => {
          return {
            cartList: state.cartList.map((item) => {
              if (item.product.id !== product.id || item.selectvarient !== selectvarient) {
                return item
              } else {
                return { ...item, quantity }
              }
            }),
          }
        })
      },
    }),
    {
      name: 'cart-stroe',
    },
  ),
)
