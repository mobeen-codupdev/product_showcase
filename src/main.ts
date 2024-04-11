import { NestFactory } from '@nestjs/core'
import * as mongoose from 'mongoose'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    mongoose.set('debug', true)
    app.setGlobalPrefix('api')
    app.enableCors()
    await app.listen(process.env.PORT || 4000)
}
bootstrap()
