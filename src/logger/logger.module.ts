// log.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from './log.model'; // Importe o modelo de log

@Module({
  imports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])],
  providers: [],
  exports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])],
})
export class LogModule {}
