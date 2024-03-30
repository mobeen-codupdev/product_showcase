import { Controller, Get } from '@nestjs/common'
import { Response } from '@interfaces/response'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async get(): Response<string> {
        const response = await this.productService.getProducts()
        return response
    }
}
