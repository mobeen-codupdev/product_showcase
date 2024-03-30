import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    /*
     * Set Global prefix URL
     */
    app.setGlobalPrefix('api')

    await app.listen(process.env.PORT || 4000)
}
bootstrap()
