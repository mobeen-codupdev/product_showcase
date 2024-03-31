import { IsString, IsEnum } from 'class-validator'
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

}
