import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { Product } from '@models/product.model'
import { GenericRepository } from './generic.repository'

@Injectable()
export class ProductRepository extends GenericRepository<any> {
    constructor(
        @InjectModel(Product.name)
        private readonly productModel: Model<Product>,
    ) {
        super(productModel)
    }

    async getProducts(
        filter: unknown = {},
        skip: number = 0,
        limit: number = 5,
    ): Promise<Product[]> {
        return this.productModel.find(filter).skip(skip).limit(limit).exec()
    }
}
