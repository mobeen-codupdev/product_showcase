import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_CONNECTION_URI, {
      dbName: process.env.DB_NAME,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
