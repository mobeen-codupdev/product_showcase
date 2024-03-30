interface Body<T> {
    data?: T | T[]
    message: string
    success: boolean
    statusCode?: number
    error?: any
}

export type Response<T> = Promise<Body<T>>
