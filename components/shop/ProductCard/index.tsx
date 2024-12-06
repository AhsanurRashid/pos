"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import ProductCardStyle from './ProductCardStyle.module.css'
import { ProductType, SellingProduct } from "@/lib/types"
import { useState } from "react"
import { useShopStore } from "../_store"

const ProductCard = ({product} : {product: ProductType}) => {
  const [quantity] = useState<number>(1)

  const { setShopProducts } = useShopStore((state) => state)

  const addSellingProducts = (product: ProductType) => {

     const newSellingProuct: SellingProduct = {
        id: product.id,
        name: product.name,
        serial: product.productCode,
        price: product.price,
        quantity: quantity, //need to work on this
        discount: product.discountPercentage,
        totalPrice: product.price * quantity,
     } 
     
     setShopProducts(newSellingProuct)
  }

  return (
    <Card onClick={() => addSellingProducts(product)} className="overflow-hidden p-2 cursor-pointer">
      <div className="flex items-center gap-2">
          <Image
              src="https://random.imagecdn.app/150/150"
              alt="randeom"
              width={50}
              height={50}
              className="w-[25px] h-auto object-cover"
          />
          <div className={ProductCardStyle.product_card_details_wrapper}>
              <div className={ProductCardStyle.product_card_name}>
                <h1>{product.name}</h1>
                <h1>{product.productName}</h1>
              </div>
              <div className={ProductCardStyle.product_card_price}>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Unit:</strong> 1kg</p>
              </div>
              <div className={ProductCardStyle.product_card_sts}>
                <p>{product.availability}</p>
              </div>
              <div className={ProductCardStyle.inrement_btn}>
                {product.productBadges}
              </div>
          </div>
      </div>
    </Card>
  )
}
export default ProductCard