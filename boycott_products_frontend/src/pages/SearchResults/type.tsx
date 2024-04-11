export type SearchProductParams = {
    page: number
    limit: number
    term: string
}

export type Product = {
    _id: string
    reporterName: string
    reporterEmail: string
    reason: string
    countryOrigin: string
    brandSocialSite: string
    productName: string
    brandName: string
    description: string
    createdAt: string
    updatedAt: string
    __v: number
}

export type GetProductState = {
    loading: boolean
    data: Product[]
    error: unknown | null | string
}
