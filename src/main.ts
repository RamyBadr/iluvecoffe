import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true,transform:true }),
  );
  const PORT = 3000;
  await app.listen(PORT);
  Logger.log(`App started at port: ${PORT}`);
}
bootstrap();
