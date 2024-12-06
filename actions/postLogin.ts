"use server"

import axiosInstance from "@/lib/axios"
import { z } from "zod"
import { UserFormValidation } from "@/lib/validation"

export const postForLogin = async(values: z.infer<typeof UserFormValidation>) => {

    const formObj = {
        "UserName": values.UserName,
        "Password": values.Password
    }

    try {
        const res = await axiosInstance.post("/PosLoginApi/Login", formObj)
        return res.data
    }catch(error){
        console.error('Login error:', error)
        throw new Error('Login failed. Please try again.')
    }
}