"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
} from "@/components/ui/table"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useShopStore } from "../_store"
import { Trash2  } from "lucide-react"
import ProductIncrement from "../ProductIncrement"
  

const ProductTable = () => {
    const { shopProducts, allTotal, deleteShopProducts } = useShopStore((state) => state)
  return (
    <Table className="text-[10px]">
        <TableHeader className="font-bold">
            <TableRow>
                <TableHead>Prodct Name</TableHead>
                <TableHead>Serial</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                shopProducts.map((item, index) => (
                    <TableRow className="select-none" key={`shop_products_${item}_${index}`}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.serial}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>
                            <div className="w-[70px]">
                                <ProductIncrement id={item.id} quantity={item.quantity}/>  
                            </div>
                        </TableCell>
                        <TableCell>{item.discount}</TableCell>
                        <TableCell>{item.totalPrice}</TableCell>
                        <TableCell>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="ghost">
                                        <Trash2 className="cursor-pointer text-red-500"/>
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        product and remove your data from our servers.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => deleteShopProducts(item.id)}>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
        {
            shopProducts.length > 0 &&
            <TableFooter className="select-none">
                <TableRow>
                    <TableCell colSpan={5}>Total</TableCell>
                    <TableCell >{allTotal}</TableCell>
                    <TableCell colSpan={1}></TableCell>
                </TableRow>
            </TableFooter>
        }
    </Table>

  )
}

export default ProductTable