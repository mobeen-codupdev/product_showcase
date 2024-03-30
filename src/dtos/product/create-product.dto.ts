import { IsString, IsEnum } from 'class-validator'
import { Reason } from './enums'

export class CreateProductDto {
    @IsString()
    reporter_name: string

    @IsString()
    reporter_email: string

    @IsEnum(Reason)
    reason: Reason

    @IsString()
    country_origin: string

    @IsString()
    brand_social_site: string

    @IsString()
    product_name: string

    @IsString()
    brand_name: string

    @IsString()
    description: string
}
