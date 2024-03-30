import { Product } from '@models/product.model'
import { Injectable } from '@nestjs/common'
import { ProductRepository } from '@repositories/product.repository'
import { CreateProductDto } from '@dtos/product/create.dto'
import { UpdateProductDto } from '@dtos/product/update.dto'

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
