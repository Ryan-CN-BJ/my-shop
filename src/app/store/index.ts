import { create } from 'zustand'

type CartState = {
  cartList: CartItem[]
  addToCart: (cartItem: CartItem) => void
  removeFromCart: (product: CartItem) => void
  isItemInCart: (product: Product, selectVarient: string) => number
  updateQuantity: (cartItem: CartItem, quantity: number) => void
}

export const useCartStore = create<CartState>((set, get) => ({
  cartList: [],
  addToCart: (product) => {
    set((state) => ({ cartList: [...state.cartList, product] }))
  },
  removeFromCart: (cartItem) => {
    set((state) => {
      return {
        cartList: state.cartList.filter((item, i) => {
          return (
            cartItem.product.id !== item.product.id || cartItem.selectvarient !== item.selectvarient
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
  updateQuantity: (cartItem, quantity) => {
    set((state) => {
      return {
        cartList: state.cartList.map((item) => {
          if (
            item.product.id !== cartItem.product.id ||
            item.product.variant !== cartItem.selectvarient
          ) {
            return item
          } else {
            return { ...item, quantity }
          }
        }),
      }
    })
  },
}))
