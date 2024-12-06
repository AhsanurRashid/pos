// Attribute Interface
interface Attribute {
    attributeName: string;
    attributeValue: string;
}

// Product Interface
export interface ProductType {
    id: number;
    name: string;
    productName: string;
    description?: string | null;
    shortDescription?: string | null;
    productStock: number;
    colorList: string[];
    stringSizeList: string[];
    compareAtPrice: number;
    price: number;
    discountPercentage: number;
    productCode: string;
    expireDate?: Date | null;
    warranty?: string | null;
    productDetailStatus: number;
    categoryId: number;
    brandName: string;
    brandDescription?: string | null;
    attributes: Attribute[];
    subCategoryId: number;
    slug: string;
    sku: string;
    productImages: string;
    images: string[];
    productBadges: string;
    badges: string[];
    rating: number;
    review: number;
    availability: string;
    totalCount: number;
}

//selling product interface
export interface SellingProduct {
    id: number,
    name: string;
    serial: string;
    price: number;
    quantity: number;
    discount: number;
    totalPrice: number;
}

//user interface 
export interface User {
    $id: string;
    id: number;
    companyId: number;
    branchId: number;
    userName: string;
    roleId: number;
}

//promo code response 
export interface PromoCodeResponse {
    $id: string
    messageType: number
    message: string
    returnValue: number
    returnObject: number
    returnId: null
    secondReturnValue: null
    partyDetails: null
}

// PaymentMethods types
export interface PaymentMethods {
    $id: string,
    id: number,
    name: string,
    ledgerId: number,
    headerId: number,
    accountTypeId: number
}