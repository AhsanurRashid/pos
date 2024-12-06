"use server"

import axiosInstance from "@/lib/axios"

export const fetchAllProducts = async() => {
    try {
       const res = await axiosInstance.get("/ProductApiPos/GetAllProducts")
        return res.data 
    }catch(error){
        console.log(error)
        throw new Error('Unable to get all products')
    }
}