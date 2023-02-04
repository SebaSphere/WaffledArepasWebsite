import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const fs = require('fs')
const YAML = require('yaml')

const generalConfig = fs.readFileSync('../config.yml', 'utf8')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(YAML.parse(generalConfig)["serverPort"]);
  console.log("The server IP is http://127.0.0.1:" + YAML.parse(generalConfig)["serverPort"])
}
bootstrap();
