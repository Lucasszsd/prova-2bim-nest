import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggerService = app.get(LoggerService);

  app.use(async (req, res, next) => {
    res.on('finish', async () => {
      await loggerService.log(req.originalUrl);
    });
    next();
  });

  await app.listen(3000);
}
bootstrap();
