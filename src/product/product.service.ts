import { Product } from '@models/product.model'
import { Injectable, Body } from '@nestjs/common'
import { ProductRepository } from '@repositories/product.repository'
import { CreateProductDto } from 'src/dtos/product/create-product.dto'
import { UpdateProductDto } from 'src/dtos/product/update-product.dto'

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    async getProducts(): Promise<Product[]> {
        const data = await this.productRepository.findAll()
        return data
    }
    async addProduct(productData: CreateProductDto): Promise<Product> {
        const data = await this.productRepository.create(productData)
        return data
    }

    async updateProduct(
        id: string,
        updateProductDto: UpdateProductDto,
    ): Promise<Product> {
        const updatedProduct = await this.productRepository.updateById(
            id,
            updateProductDto,
        )
        return updatedProduct
    }
}
