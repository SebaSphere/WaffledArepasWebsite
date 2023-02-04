import {Inject, Injectable} from '@nestjs/common';
import {MenuItemEntity} from "./menu-item.entity";

@Injectable()
export class MenuService {

    constructor(
        @Inject('MENU_ITEM_REPOSITORY')
        private menuItemRepository: typeof MenuItemEntity
    ) {}

    async getMenuItemEntity(): Promise<MenuItemEntity[]> {
        return this.menuItemRepository.findAll<MenuItemEntity>();
    }

    getMenu(): string {
        return 'hello menu';
    }

}
