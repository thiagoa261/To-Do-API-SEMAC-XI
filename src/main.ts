import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.use(morgan('dev'));

  if (!process.env.PORT) throw new Error('PORT não definido no .env');

  await app.listen(process.env.PORT);

  console.clear();

  console.log(`🚀 aplicação rodando em: http://localhost:${process.env.PORT}`);
}

bootstrap();
