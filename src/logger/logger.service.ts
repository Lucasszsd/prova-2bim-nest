// logger.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './log.model'; // Importe o modelo de log

@Injectable()
export class LoggerService {
  constructor(@InjectModel(Log.name) private readonly logModel: Model<Log>) {}

  async log(message: string): Promise<void> {
    const newLog = new this.logModel({ message });
    await newLog.save();
  }
}
