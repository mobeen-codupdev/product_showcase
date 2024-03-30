import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Reason } from '@dtos/product/enums'

export type ProductDocument = HydratedDocument<Product>

@Schema({ timestamps: true })
export class Product {
    @Prop({ required: true })
    reporter_name: string

    @Prop({ required: true })
    reporter_email: string

    @Prop({ required: true })
    reason: Reason

    @Prop({ required: true })
    country_origin: string

    @Prop({ required: true })
    brand_social_site: string

    @Prop({ required: true })
    product_name: string

    @Prop({ required: true })
    brand_name: string

    @Prop({ required: true })
    description: string
}

export const ProductModel = SchemaFactory.createForClass(Product)
