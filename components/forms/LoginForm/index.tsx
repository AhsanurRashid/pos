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


const LoginForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    })
 
    function onSubmit(values: z.infer<typeof UserFormValidation>) {
        setIsLoading(true)
        setTimeout(() => {
            console.log(values)
            setIsLoading(false)
            router.push('/shop')
        }, 1000)
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
                            name="name"
                            placeholder="John Doe"
                            label="Employe Name"
                        />
                        <CustomFormFiled 
                            control={form.control} 
                            fieldType={FormFieldType.EMAIL}
                            name="email"
                            placeholder="johndoe@gmail.com"
                            label="Email"
                        />
                        <CustomFormFiled 
                            control={form.control} 
                            fieldType={FormFieldType.PASSWORD}
                            name="password"
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