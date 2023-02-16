import {Inject, Injectable} from '@nestjs/common';
import {MenuItemEntity} from "./entities/menu-item.entity";
import {MenuItems} from "../constants";

@Injectable()
export class MenuService {

    constructor(
        @Inject(MenuItems.MENU_ITEM_REPOSITORY)
        private menuItemRepository: typeof MenuItemEntity
    ) {}

    async getMenuItemEntity(): Promise<MenuItemEntity[]> {
        return this.menuItemRepository.findAll<MenuItemEntity>();
    }

    async getMenu(): Promise<string> {
        const menuItemEntities = await this.getMenuItemEntity();
        return JSON.stringify(menuItemEntities, null, 2);
    }

}