import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export default (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('HapRocket API Docs')
    .setDescription('The best feedback api on the planet')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
}