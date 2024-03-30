import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common'
import { Response } from '@interfaces/response'
import { Product } from '@models/product.model'
import { CreateProductDto } from '@dtos/product/create.dto'
import { UpdateProductDto } from '@dtos/product/update.dto'
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

    @Post()
    async create(@Body() productDto: CreateProductDto): Response<Product> {
        const data = await this.productService.addProduct(productDto)
        return {
            success: true,
            data,
            message: 'Product has been created successfully',
        }
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto,
    ): Response<Product> {
        const data = await this.productService.updateProduct(
            id,
            updateProductDto,
        )
        return {
            success: true,
            data,
            message: 'Product has been updated successfully',
        }
    }
}
