import {
    IsNotEmpty,
    IsString,
    IsArray,
    ValidateNested,
    IsEnum,
} from 'class-validator'
import { Type } from 'class-transformer'
import { Reason } from './enums'

export class CreateProductDto {
    @IsString()
    reporterName: string

    @IsString()
    reporterEmail: string

    @IsEnum(Reason)
    reason: Reason

    @IsString()
    countryOrigin: string

    @IsString()
    brandSocialSite: string

    @IsString()
    productName: string

    @IsString()
    brandName: string

    @IsString()
    description: string

    @IsNotEmpty()
    @IsArray()
    @Type(() => CreateAlternateProductDto)
    alternateProducts: CreateAlternateProductDto[]
}

class CreateAlternateProductDto {
    @IsNotEmpty()
    @IsString()
    alternateProductName: string

    @IsNotEmpty()
    @IsString()
    countryOrigin: string

    @IsString()
    brandSocialSite: string

    @IsString()
    brandName: string

    @IsNotEmpty()
    @IsArray()
    @Type(() => ImageDto)
    productImages: ImageDto[]

    @IsNotEmpty()
    @IsArray()
    @Type(() => ImageDto)
    brandImages: ImageDto[]
}
class ImageDto {
    @IsNotEmpty()
    @IsString()
    url: string
}
