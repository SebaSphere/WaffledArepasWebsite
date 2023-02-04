import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const fs = require('fs')
const YAML = require('yaml')

const generalConfig = fs.readFileSync('../config.yml', 'utf8')
const prerenderToken = fs.readFileSync('../credentials/prerender-token.json', 'utf8')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(YAML.parse(generalConfig)["serverPort"]);
  // app.use(require('prerender-node').set('prerenderToken', JSON.parse(prerenderToken)["token"]));
  console.log("The server IP is http://127.0.0.1:" + YAML.parse(generalConfig)["serverPort"])
}
bootstrap();
