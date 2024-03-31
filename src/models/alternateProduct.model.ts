import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type AlternateProductDocument = HydratedDocument<AlternateProduct>

@Schema({ timestamps: true })

export class AlternateProduct {
    @Prop({ required: true })
    alternateProductName: string

    @Prop({ required: true })
    countryOrigin: string

    @Prop({ required: true })
    brandSocialSite: string

    @Prop({ required: true })
    brandName: string

    @Prop({ required: true })
    description: string

    @Prop({ required: true })
    productId: BigInteger
}

export const AlternateProductModel = SchemaFactory.createForClass(AlternateProduct)
