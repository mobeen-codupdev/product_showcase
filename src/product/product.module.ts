import { Module } from '@nestjs/common'
import { ProductRepository } from '@repositories/product.repository'
import { MongooseModule } from '@nestjs/mongoose'
import { Product, ProductModel } from '@models/product.model'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductModel },
        ]),
    ],
    controllers: [ProductController],
    providers: [ProductService, ProductRepository],
})
export class ProductModule {}
