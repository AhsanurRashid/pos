import { create } from "zustand"

interface CustomerInfoType {
    name: string,
    email: string,
    address: string,
    number: string
}

interface CustomerInfoStoreType {
    customerInfo: CustomerInfoType
}

interface CustomerInfoStoreActions {
    setCustomerInfo: (info: CustomerInfoType) => void
}

export const useCustomerInfoStore = create<CustomerInfoStoreType & CustomerInfoStoreActions>((set) => ({
    customerInfo: {
        name: '',
        email: '',
        address: '',
        number: ''
    },
    setCustomerInfo: (info: CustomerInfoType) => set({ customerInfo: info })
}))