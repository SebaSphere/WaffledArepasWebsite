import { Module } from '@nestjs/common';
import {MenuModule} from "./menu/menu.module";
import { CategoryModule } from './category/category.module';

@Module({
  imports: [MenuModule, CategoryModule],
  controllers: [],
  providers: []
})
export class AppModule {}
