import { Suspense } from "react"
import { fetchAllProducts } from "@/actions/fetchProducts"
import ProductCard from "../ProductCard"
import ProductListStyle from './ProductListStyle.module.css'
import { ProductType } from "@/lib/types"

const ProductList = async() => {
  const products = await fetchAllProducts()

  return (
    <div className={ProductListStyle.product_list_wrapper}>
      <div className={ProductListStyle.product_list}>
        {
          products.map((product: ProductType, index: number) => (
            <Suspense key={`product_${index}_${product}`} fallback={<h1>loading...</h1>}>
              <ProductCard product={product}/>
            </Suspense>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList