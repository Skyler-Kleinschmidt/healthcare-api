import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS (Cross-Origin Resource Sharing) to allow cross-origin requests
  app.enableCors();

  // Set the application to listen on port 3000
  await app.listen(3000);
}

bootstrap();
