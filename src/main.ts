import { NestFactory } from '@nestjs/core'
import * as mongoose from 'mongoose'
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    mongoose.set('debug', true)
    app.setGlobalPrefix('api')
    app.enableCors()
    await app.listen(process.env.PORT || 4000)

    Logger.log(`Server is running on ${process.env.PORT || 4000} `)
}
bootstrap()
