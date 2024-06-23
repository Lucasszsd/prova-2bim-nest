import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DeckModule } from './deck/deck.module';
import { LoggerService } from './logger/logger.service';
import { LogModule } from './logger/logger.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    HttpModule,
    AuthModule,
    DeckModule,
    LogModule,
  ],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class AppModule {}
