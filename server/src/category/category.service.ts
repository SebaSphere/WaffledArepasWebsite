import {Inject, Injectable} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {Category} from "../constants";
import {CategoryEntity} from "./entities/category.entity";

@Injectable()
export class CategoryService {

  constructor(
      @Inject(Category.CATEGORY_REPOSITORY)
      private categoryRepository: typeof CategoryEntity
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  async findAll(): Promise<string> {
    const menuItemEntities = await this.categoryRepository.findAll<CategoryEntity>();
    return JSON.stringify(menuItemEntities, null, 2);
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
