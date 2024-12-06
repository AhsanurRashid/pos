"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"

import loginFormStyles from './loginForm.module.css'
import CustomFormFiled, { FormFieldType } from "../CustomFormFiled"
import { useRouter } from "next/navigation"
import { useState } from "react"
import SubmitButton from "../SubmitButton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Logo from "@/components/layouts/Navbar/Logo"
import { Separator } from "@/components/ui/separator"
import { UserFormValidation } from "@/lib/validation"
import { useToast } from "@/hooks/use-toast"
import { postForLogin } from "@/actions/postLogin"
import { useUserStore } from "@/components/layouts/Navbar/UserProfile/_store"

import Cookies from "js-cookie"

const LoginForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()

    const { setUser } = useUserStore((state) => state)

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            UserName: "",
            Password: ""
        },
    })
 

    
    const onSubmit = async(values: z.infer<typeof UserFormValidation>) => {
        setIsLoading(true)
        try {
            const result = await postForLogin(values)

            if(result.success) {
                Cookies.set("user", JSON.stringify(result.user), { expires: 7 })
                setUser(result.user)
            }

            toast({
                title: "Login Successful",
                description: "You have been logged in successfully.",
            })

            router.push('/shop')
        } catch(error){
            console.log(error)
            toast({
                title: "Login Failed",
                description: "There was an error logging in. Please try again.",
                variant: "destructive",
            })
        } finally{
            setIsLoading(false)
        }
    }

    return (
        <Card className={loginFormStyles.login_form}>
            <CardHeader className="flex items-center">
                <Logo />
            </CardHeader>
            <Separator className="mb-4 mt-0" />
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <CustomFormFiled 
                            control={form.control} 
                            fieldType={FormFieldType.INPUT}
                            name="UserName"
                            placeholder="John Doe"
                            label="Employe Name"
                        />
                        <CustomFormFiled 
                            control={form.control} 
                            fieldType={FormFieldType.PASSWORD}
                            name="Password"
                            placeholder="Enter your password"
                            label="Password"
                        />
                        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default LoginForm