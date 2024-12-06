import { SellingProduct } from "@/lib/types"
import { create } from "zustand"

interface ShopStoreType {
  shopProducts: SellingProduct[]
  allTotal: number
}

interface ShopStoreActions {
  setShopProducts: (product: SellingProduct) => void
  deleteShopProducts: (id: number) => void
  setProductIncrement: (id: number) => void
  setProductDecrement: (id: number) => void
}

export const useShopStore = create<ShopStoreType & ShopStoreActions>((set) => ({
  shopProducts: [],
  allTotal: 0,

  setShopProducts: (product) => set((state) => {
    const prodctExist: SellingProduct | undefined = state.shopProducts.find(item => item.id === product.id)
    let newShopProducts: SellingProduct[] = []
    if(!prodctExist){
        newShopProducts = [...state.shopProducts, product]
    }else {
        newShopProducts = state.shopProducts.map((item) => 
            item.id === product.id 
              ? {
                  ...item, 
                  quantity: item.quantity + 1, 
                  totalPrice: Number(((item.quantity + 1) * item.price).toFixed(2)) 
                } 
              : item
          )
    }
    const newAllTotal = Number(newShopProducts.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2))
    return { shopProducts: newShopProducts, allTotal: newAllTotal }
  }),

  deleteShopProducts: (id) => set((state) => {
    const newShopProducts = state.shopProducts.filter(item => item.id !== id)
    const newAllTotal = Number(newShopProducts.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2))
    return { shopProducts: newShopProducts, allTotal: newAllTotal }
  }),

  setProductIncrement: (id) => set((state) => {
    const newShopProducts = state.shopProducts.map((item) => 
      item.id === id 
        ? {
            ...item, 
            quantity: item.quantity + 1, 
            totalPrice: Number(((item.quantity + 1) * item.price).toFixed(2)) 
          } 
        : item
    )
    const newAllTotal = Number(newShopProducts.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2))
    return { shopProducts: newShopProducts, allTotal: newAllTotal }
  }),

  setProductDecrement: (id) => set((state) => {
    const newShopProducts = state.shopProducts.map((item) => 
      item.id === id 
        ? {
            ...item, 
            quantity: Math.max(1, item.quantity - 1),
            totalPrice: Number((Math.max(1, item.quantity - 1) * item.price).toFixed(2)) 
          } 
        : item
    )
    const newAllTotal = Number(newShopProducts.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2))
    return { shopProducts: newShopProducts, allTotal: newAllTotal }
  }),
}))