"use client"

import { Card } from '@/components/ui/card'
import Image from 'next/image'
import CustomerInfoFrom from './CustomerInfoFrom'
import { useCustomerInfoStore } from './_store'

const CustomerInfo = () => {
    const {customerInfo} = useCustomerInfoStore((state) => state)
    
  return (
    <div className='pb-2 flex fixed bottom-0'>
        <Card className='px-4 py-2 flex items-center gap-4'>
            {
                customerInfo.name.length > 0 && 
                <>
                    <Image
                        src="https://random.imagecdn.app/150/150"
                        alt="randeom"
                        width={1000}
                        height={1000}
                        className="w-[60px] h-[60px] object-cover rounded-full"
                    />
                    <div>
                        <h1 className='text-sm font-semibold tracking-wide'>{customerInfo.name}</h1>
                        <p className='text-xs font-light tracking-wide'>{customerInfo.email}</p>
                        <p className='text-xs font-light tracking-wide'>{customerInfo.address}</p>
                        <p className='text-xs font-light tracking-wide'>{customerInfo.number}</p>
                    </div>
                </>
            }
            <div className=''>
                <CustomerInfoFrom />
            </div>
        </Card>
    </div>
  )
}

export default CustomerInfo