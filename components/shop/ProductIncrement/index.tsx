import { Card } from '@/components/ui/card'
import { Minus, Plus } from 'lucide-react'
import { useShopStore } from '../_store'

const ProductIncrement = ({ id, quantity }: { id: number, quantity: number}) => {
    const { setProductIncrement, setProductDecrement } = useShopStore((state) =>  state)
  return (
    <Card>
        <div className='flex items-center justify-between px-2 py-1'>  
            {
                quantity > 1 ?
                <div className='cursor-pointer'>
                    <Minus onClick={() => setProductDecrement(id)} size={12} />
                </div> :
                <div className='cursor-pointer opacity-10'>
                    <Minus size={12} />
                </div> 
            }
            
            <div className='text-xs font-light select-none'>
                {quantity}
            </div>
            <div className='cursor-pointer'>
                <Plus onClick={() => setProductIncrement(id)} size={12} />
            </div>
        </div>
    </Card>
  )
}

export default ProductIncrement