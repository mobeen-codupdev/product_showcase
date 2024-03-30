import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { Product } from '@models/product.model'
import { GenericRepository } from './generic.repository'

@Injectable()
export class ProductRepository extends GenericRepository<any> {
    constructor(@InjectModel(Product.name) model: Model<Product>) {
        super(model)
    }
}
