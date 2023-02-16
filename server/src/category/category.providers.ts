import {CategoryEntity} from "./entities/category.entity";
import {Category} from "../constants";


export const categoryProviders = [
    {
        provide: Category.CATEGORY_REPOSITORY,
        useValue: CategoryEntity,
    },
];