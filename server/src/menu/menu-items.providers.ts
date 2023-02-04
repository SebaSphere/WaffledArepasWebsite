import {MenuItemEntity} from "./menu-item.entity";

export const menuItemsProviders = [
    {
        provide: 'MENU_ITEM_REPOSITORY',
        useValue: MenuItemEntity,
    },
];