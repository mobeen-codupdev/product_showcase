import { Product } from '@models/product.model'
import { Injectable } from '@nestjs/common'
import { ProductRepository } from '@repositories/product.repository'
import { CreateProductDto } from '@dtos/product/create.dto'
import { UpdateProductDto } from '@dtos/product/update.dto'
import { GetProducts } from './types'
import { ObjectId } from 'mongoose'

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    async getProducts(params: GetProducts): Promise<Product[]> {
        let filter = {}
        let skip = 0
        const limit = params.limit || 5
        if (params.page) {
            skip = (params.page - 1) * limit
        }
        if (params?.term) {
            filter = {
                $or: [
                    { productName: new RegExp(`.*${params.term}.*`, 'i') },
                    { productName: new RegExp(`.*${params.term}.*`, 'i') },
                ],
            }
        }
        return this.productRepository.getProducts(filter, skip, limit)
    }

    async addProduct(productData: CreateProductDto): Promise<Product> {
        const data = await this.productRepository.create(productData)
        return data
    }

    async getProductById(productId: string): Promise<Product> {
        const data = await this.productRepository.findOne({
            _id: productId,
        })
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
