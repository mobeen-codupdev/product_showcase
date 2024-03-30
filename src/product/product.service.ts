import { Product } from '@models/product.model'
import { Injectable } from '@nestjs/common'
import { ProductRepository } from '@repositories/product.repository'

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    async getProducts(): Promise<Product[]> {
        const data = await this.productRepository.findAll()
        return data
    }
}
