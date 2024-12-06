import ProductList from '@/components/shop/ProductList'
import shopPageStyle from './shopPage.module.css'
import ProductSearch from '@/components/shop/ProductSearch'
import ProductTable from '@/components/shop/ProductTable'
import CustomerInfo from '@/components/shop/CustomerInfo'
import ShopButtons from '@/components/shop/ShopButtons'

const Shop = () => {
  return (
    <section className={shopPageStyle.shop_page}>
      <div className={shopPageStyle.shop_page_wrapper}>
        <div className={shopPageStyle.shop_page_wrapper_left}>
          <ProductSearch  />
          <div className={shopPageStyle.shop_page_separator}></div>
          <ProductList />
          <div className={shopPageStyle.shop_page_separator}></div>
          <CustomerInfo />
        </div>
        <div className={shopPageStyle.shop_page_wrapper_right}>
          <ProductTable />
          <ShopButtons />
        </div>
      </div>
    </section>
  )
}

export default Shop