import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { Reason } from './enums'

export class UpdateProductDto {
    @IsNotEmpty()
    @IsString()
    reporter_name: string

    @IsNotEmpty()
    @IsString()
    reporter_email: string

    @IsEnum(Reason)
    reason: Reason

    @IsNotEmpty()
    @IsString()
    country_origin: string

    @IsNotEmpty()
    @IsString()
    brand_social_site: string

    @IsNotEmpty()
    @IsString()
    product_name: string

    @IsNotEmpty()
    @IsString()
    brand_name: string

    @IsNotEmpty()
    @IsString()
    description: string
}
