import { Module } from '@nestjs/common';
import { MenuController } from './menu/menu.controller';
import {MenuService} from "./menu/menu.service";

@Module({
  imports: [],
  controllers: [MenuController],
  providers: [MenuService],
})
export class AppModule {}
