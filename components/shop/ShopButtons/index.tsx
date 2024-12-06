"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CircleDollarSign, CreditCard, X } from "lucide-react"
import { useShopStore } from "../_store"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import SubmitButton from "@/components/forms/SubmitButton"
import { MouseEvent, useEffect, useState } from "react"
import { getPromoCode } from "@/actions/getPromoCode"
import { toast } from "@/hooks/use-toast"
import { getPaymentMethods } from "@/actions/getPaymentMethods"
import { PaymentMethods } from "@/lib/types"

const ShopBttons = () => {

  const { shopProducts, allTotal } = useShopStore((state) => state)
  const [isLoading, setIsLoading] = useState(false)
  const [isPromoCodeLoading, setIsPromoCodeLoading] = useState(false)
  const [cupon, setCupon] = useState<string>('')
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethods[]>([])

  const fetchPaymentMethods = async() => {
      try {
        const methods = await getPaymentMethods()
        setPaymentMethods(methods)
      }catch(error){
        console.log(error)
        toast({
          title: "Invalid Payment Method!",
          description: "There was an error in adding payment methods. Please try again.",
          variant: "destructive",
        })
      }
  }

  useEffect(() => {
    fetchPaymentMethods()
  }, [])

  const handleApplyCupon = async(e: MouseEvent<
  HTMLButtonElement>) => {
    e.preventDefault()
    setIsPromoCodeLoading(true)
    try {
      const result = await getPromoCode(cupon, allTotal)
      if(result.message){
        toast({
          title: "Promo Code Successful",
          description: "You have been logged in successfully.",
        })
      }
    }catch(error){
      console.log(error)
      toast({
        title: "Invalid Promo Code!",
        description: "There was an error in adding promo code. Please try again.",
        variant: "destructive",
      })
    }finally {
      setIsPromoCodeLoading(false)
    }
  }
  
  return (
    <>
      {
        shopProducts.length > 0 ?
        <div className="p-2 flex fixed bottom-0 right-0">
            <Card className="px-4 py-2 flex gap-2">
              <Button variant="default" className="gap-2">
                  <CircleDollarSign className="h-4 w-4" />
                  Sell
              </Button>
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant="default" className="gap-2">
                      <CreditCard className="h-4 w-4" />
                      Pay
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader className="relative">
                    <AlertDialogDescription>
                      <form className="flex flex-col gap-4">
                        <div className="flex items-center justify-between gap-2 text-lg font-semibold">
                          <div>Subtotal</div>
                          <div>${allTotal}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input onChange={(e) => setCupon(e.target.value)} value={cupon} type="text" placeholder="Promo Code / Coupon"/>
                          <Button disabled={isPromoCodeLoading} onClick={(e) => handleApplyCupon(e)} variant="default" className="px-12">Apply</Button>
                        </div>
                        {
                          paymentMethods.length > 0 ? 
                          <div className="flex items-center gap-2">
                            <h1>Payment: </h1>
                            <RadioGroup className="flex items-center gap-4" defaultValue="option-one">
                              {
                                paymentMethods.map((paymentMethod: PaymentMethods) => (
                                  <div key={`paymentMethod_${paymentMethod.$id}`} className="flex items-center space-x-2">
                                    <RadioGroupItem value={paymentMethod.$id} id={paymentMethod.$id} />
                                    <Label htmlFor={paymentMethod.$id}>{paymentMethod.name}</Label>
                                  </div>
                                ))
                              }
                              
                            </RadioGroup>
                          </div> : null
                        }
                        <div className="w-full h-[1px] bg-primary"></div>
                        <div className="flex items-center justify-between gap-2 text-black dark:text-white text-xl font-semibold">
                          <div>Total</div>
                          <div>$109.99</div>
                        </div>
                        <SubmitButton isLoading={isLoading}>Buy Now</SubmitButton>
                      </form>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                    <AlertDialogCancel className="w-5 h-8 rounded-full bg-red-500 text-white shadow-md absolute -top-4 -right-4">
                        <X />
                    </AlertDialogCancel>
                </AlertDialogContent>
              </AlertDialog>
            </Card>
        </div> :
        null
      }
    </>
  )
}

export default ShopBttons