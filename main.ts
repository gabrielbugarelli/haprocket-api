import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import swaggerBootstrap from 'src/infrasctructure/swaggerBootstrap';
import { AppModule } from './src/application/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  swaggerBootstrap(app);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }));

  app.enableCors();

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
