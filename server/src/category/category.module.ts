import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import {categoryProviders} from "./category.providers";
import {DatabaseModule} from "../database/database.module";

@Module({
    imports: [],
    controllers: [CategoryController],
    providers: [
        CategoryService,
        ...categoryProviders
    ]
})
export class CategoryModule {}
