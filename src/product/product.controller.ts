import { Controller, Get } from '@nestjs/common'
import { Response } from '@interfaces/response'
import { Product } from '@models/product.model'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async get(): Response<Product[]> {
        const data = await this.productService.getProducts()
        return {
            success: true,
            data,
            message: 'success',
        }
    }
}
