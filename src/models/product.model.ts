import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Reason } from '@dtos/product/enums'

export type ProductDocument = HydratedDocument<Product>
interface Image {
    url: string
}
class AlternateProduct {
    @Prop({ required: true })
    alternateProductName: string

    @Prop({ required: true })
    countryOrigin: string

    @Prop()
    brandSocialSite: string

    @Prop({ required: true })
    brandName: string

    @Prop({ required: true, type: [Object] })
    productImages: Image[]

    @Prop({ required: true, type: [Object] })
    brandImages: Image[]
}

@Schema({ timestamps: true })
export class Product {
    @Prop({ required: true })
    reporterName: string

    @Prop({ required: true })
    reporterEmail: string

    @Prop({ required: true })
    reason: Reason

    @Prop({ required: true })
    countryOrigin: string

    @Prop({ required: true })
    brandSocialSite: string

    @Prop({ required: true })
    productName: string

    @Prop({ required: true })
    brandName: string

    @Prop({ required: true })
    description: string

    @Prop({ required: false })
    productImageUrl: string

    @Prop({ required: false })
    brandImageUrl: string

    @Prop({ required: true, type: AlternateProduct })
    alternateProducts: AlternateProduct
}




export const ProductModel = SchemaFactory.createForClass(Product)
