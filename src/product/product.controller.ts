import { Body, Controller, Get, Post, Param, Put, Query } from '@nestjs/common'
import { Response } from '@interfaces/response'

import { Product } from '@models/product.model'
import { CreateProductDto } from '@dtos/product/create.dto'
import { UpdateProductDto } from '@dtos/product/update.dto'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async get(
        @Query('page') page: string,
        @Query('limit') limit: string,
        @Query('term') term: string,
    ): Response<Product[]> {
        const pageNumber = page ? parseInt(page, 10) : 1
        const pageLimit = limit ? parseInt(limit, 10) : 5
        const data = await this.productService.getProducts({
            page: pageNumber,
            limit: pageLimit,
            term,
        })
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

    @Get(':productId')
    async getProductById(
        @Param('productId') productId: string,
    ): Response<Product> {
        const data = await this.productService.getProductById(productId)
        return {
            success: true,
            data,
            message: 'Product has been fetched successfully',
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
