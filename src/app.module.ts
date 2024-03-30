import { APP_FILTER } from '@nestjs/core'
import { ConfigModule } from '@nestjs/config'
import { GlobalException } from '@middlewares/global-exception-handler'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service'
import { AppController } from './app.controller'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.DB_CONNECTION_URI, {
            dbName: process.env.DB_NAME,
        }),
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_FILTER,
            useClass: GlobalException,
        },
    ],
})
export class AppModule {}
