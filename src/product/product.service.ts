import { Injectable } from '@nestjs/common'

@Injectable()
export class ProductService {
    getProducts(): any {
        return ['product1']
    }
}
