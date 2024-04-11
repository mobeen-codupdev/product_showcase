export interface FormValues {
    reporterName?: string
    reporterEmail?: string
    reason?: string
    countryOrigin?: string
    brandSocialSite?: string
    productName?: string
    brandName?: string
    description?: string
    alternateProductName?: string
}
export interface Product {
    reporterName: string
    reporterEmail: string
    reason: string
    countryOrigin: string
    brandSocialSite: string
    productName: string
    brandName: string
    description: string
    _id: string
    createdAt: string
    updatedAt: string
    __v: number
}
export interface ProductState {
    loading: boolean
    product: Product | null,
    error: string | undefined
}
