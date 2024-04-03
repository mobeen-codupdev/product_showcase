import { NestFactory } from '@nestjs/core'
import * as Sentry from '@sentry/node'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    /*
     * Set Global prefix URL
     */
    app.setGlobalPrefix('api')

    /**
     * initiate the sentry instance
     */
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
    })

    await app.listen(process.env.PORT || 4000)
}
bootstrap()
