import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common'
import { Response } from '@interfaces/response'
import { Product } from '@models/product.model'
import { ProductService } from './product.service'
import { CreateProductDto } from 'src/dtos/product/create-product.dto'
import { UpdateProductDto } from 'src/dtos/product/update-product.dto'

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

    @Post()
    async create(@Body() productDto: CreateProductDto): Promise<Product> {
        try {
            const data = await this.productService.addProduct(productDto)
            return data
        } catch (e) {
            throw e
        }
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto,
    ) {
        return this.productService.updateProduct(id, updateProductDto)
    }
}
