"use server"

import axiosInstance from "@/lib/axios"

export const getPaymentMethods = async() => {
    try {
        const res = await axiosInstance.get('/PosSalesApi/GetPaymentMethodsForPos')
        return res.data
    }catch(error){
        console.log(error)
        throw new Error("Unale to get payment methods")
    }
}