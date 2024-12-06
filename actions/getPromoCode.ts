"use server"

import axiosInstance from "@/lib/axios"
import { PromoCodeResponse } from "@/lib/types"

export const getPromoCode = async(code: string, total: number): Promise<PromoCodeResponse> => {
    console.log('code =>', code)
    console.log('total =>', total)
    console.log('url =>', `/PosSalesApi/GetPromoCodeOfferAmount?code=${code}&totalCost=${total}`)
    try {
        const res = await axiosInstance.get(`/PosSalesApi/GetPromoCodeOfferAmount?code=${code}&totalCost=${total}`)
        return res.data
    }catch(error){
        console.log('Apply cupon error', error)
        throw new Error("Invalid Cupon!")
    }
}