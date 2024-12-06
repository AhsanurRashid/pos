"use client"

import CustomFormFiled, { FormFieldType } from "@/components/forms/CustomFormFiled"
import SubmitButton from "@/components/forms/SubmitButton"
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { PlusCircle, UserPen } from 'lucide-react'
import { Form } from "@/components/ui/form"
import { CustomerFromValidation } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { X } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useCustomerInfoStore } from "../_store"

const CustomerInfoFrom = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const {customerInfo, setCustomerInfo} = useCustomerInfoStore((state) => state)

    const form = useForm<z.infer<typeof CustomerFromValidation>>({
        resolver: zodResolver(CustomerFromValidation),
        defaultValues: {
            name: "",
            email: "",
            address: "",
            number: ""
        }
    })

    const onSubmit = (values: z.infer<typeof CustomerFromValidation>) => {
        setIsLoading(true)
        setTimeout(() => {
            setCustomerInfo(values)
            setIsLoading(false)
            // form.reset()
        }, 1000)

        setTimeout(() => {
            setIsOpen(false)
        }, 1500)
    }
   
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
            <Button variant="secondary" className="gap-2">
                { 
                    customerInfo.name.length > 0 ? 
                    <>
                        <UserPen className="h-4 w-4" />
                        Edit Customer
                    </> :
                    <>
                        <PlusCircle className="h-4 w-4" />
                        Add Customer
                    </>
                }
                
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader className="relative">
            <AlertDialogTitle />
                <AlertDialogDescription>
                    <Form {...form}>
                        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
                            <CustomFormFiled
                                control={form.control}
                                fieldType={FormFieldType.INPUT}
                                name="name"
                                label="Name"
                            />
                            <CustomFormFiled 
                                control={form.control} 
                                fieldType={FormFieldType.EMAIL}
                                name="email"
                                label="Email"
                            />
                            <CustomFormFiled 
                                control={form.control} 
                                fieldType={FormFieldType.TEXTAREA}
                                name="address"
                                label="Address"
                            />
                            <CustomFormFiled 
                                control={form.control} 
                                fieldType={FormFieldType.PHONE_INPUT}
                                name="number"
                                label="Number"
                            />
                            <SubmitButton isLoading={isLoading}>
                                Add new customer
                                {/* <AlertDialogAction>Done</AlertDialogAction> */}
                            </SubmitButton>
                        </form>
                    </Form>
                </AlertDialogDescription>
                <AlertDialogCancel className="w-5 h-8 rounded-full bg-red-500 text-white shadow-md absolute -top-12 -right-10">
                <X />
            </AlertDialogCancel>
            </AlertDialogHeader>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default CustomerInfoFrom